import { AfterViewInit,Component,ElementRef, ViewChild  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from '../patient/patient.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
 import { ChartDataset, ChartOptions } from 'chart.js';
import Chart from 'chart.js/auto';
import { RouterTestingHarness } from '@angular/router/testing';






@Component({
  selector: 'app-patient-selection',
  templateUrl: './patient-selection.component.html',
  styleUrls: ['./patient-selection.component.css']
})
export class PatientSelectionComponent implements AfterViewInit  {
  // @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;
  // lineChart: any;
  
  public chartOptions: Partial<ChartOptions>;
  // public chart: any;

  deneme: any[] = [];
   deneme2:string='';
   constructor(private formBuilder: FormBuilder,
    private _patientService: PatientService,
    private http: HttpClient,
    private router:Router){
      
    }
  ngAfterViewInit(): void {
    // this.lineChartMethod();
   
   
  }
    // result: string;
    // getPatients() {
    //   this.http.get('http://localhost/profiler/patients')
    //     .pipe(
    //       catchError((error) => {
    //         let errorMessage = error.status + ': ' + error.statusText;
    //         if (error.error instanceof ErrorEvent) {
    //           errorMessage += ` - ${error.error.message}`;
    //         } else if (error.error && error.error.message) {
    //           errorMessage += ` - ${error.error.message}`;
    //         }
    //         return throwError(errorMessage);
    //       })
    //     )
    //     .subscribe((data) => {
    //       this.result = JSON.parse(JSON.stringify(data));
    //     }, (error) => {
    //       this.result = error;
    //     });
    // }
    patients: any[] = [];
    selectedPatient: any = null;
    result: string = '';
    isActive:boolean=false;
    recordPatientNationalId: string;
    recordId: string="1";
    result2: string='';
    result3: string='';
    result4:string='';
    datas: string[];
    lineChartData: any[] = [];
    chart: any
    color:string='green';
    valu:boolean=false
    stat:number=null;
    situation:string='NORMAL'
  

  
  
  
    
  
    ngOnInit() {
      this.getPatients();
      
        

      
    
    }
   
  
    getPatients() {
      this.http.get('http://localhost/profiler/patients')
        .pipe(
          catchError((error) => {
            let errorMessage = error.status + ': ' + error.statusText;
            if (error.error instanceof ErrorEvent) {
              errorMessage += ` - ${error.error.message}`;
            } else if (error.error && error.error.message) {
              errorMessage += ` - ${error.error.message}`;
            }
            return throwError(errorMessage);
          })
        )
        .subscribe((data) => {
          this.patients = JSON.parse(JSON.stringify(data));
        }, (error) => {
          this.result = error;
        });
    }
  
    onPatientSelected(patientId: string) {
      this.selectedPatient = this.patients.find(patient => patient.national_id === patientId);
      this.valu=true;
      this.getEmergencyPatient()
      setInterval(() => {
        this.colorize();
      }, 10000);
      
      
    }
  isActivated(){
   this.isActive=!this.isActive
  }
  getRecord() {
    const patientId = this.recordPatientNationalId;
    const recordId = this.recordId;
    if (recordId !== '') {
      this.http.get('http://localhost/profiler/records/' + this.selectedPatient.national_id + '/' + 1)
        .subscribe(
          data => {
            this.result2 = JSON.parse(JSON.stringify(data));
          },
          error => {
            this.result2 = error.status + ': ' + error.statusText + ' ' + JSON.stringify(error.error);
          }
        );
    }
  }
  getRecord2() {
    const patientId = this.recordPatientNationalId;
    const recordId = this.recordId;
    
      this.http.get('http://localhost/profiler/records/' + this.selectedPatient.national_id)
        .subscribe(
          data => {
            this.result3 = JSON.parse(JSON.stringify(data));
            this.lineChartData =  Object.values(data);
            
            
            
          },
          error => {
            this.result3 = error.status + ': ' + error.statusText + ' ' + JSON.stringify(error.error);

          }
          
        );
        for (var char of this.result3) {
          this.deneme=Object.entries(char)
          this.deneme2=this.deneme[2][1];
           // prints chars: H e l l o  W o r l d
        }
      
       
      
    
  }
  getEmergencyPatient() {
    
    this.http.get(`http://localhost/profiler/patients/`+this.selectedPatient.national_id+`/emergency`)
      .subscribe(
        data => {
          this.result4 = JSON.parse(JSON.stringify(data));
          console.log(this.result4)
          this.stat=Number(Object.values(data));
          console.log('stat',this.stat)
         
        },
        error => {
          console.log(error);
        }
      );
      
  }
  fill(val:string){
    this.datas=val.split(',');

  }
  // lineChartMethod() {
   
    
   
    
  //   this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: [
  //         'January',
  //         'February',
  //         'March',
  //         'April',
  //         'May',
  //         'June',
  //         'July',
  //         'August',
  //         'September',
  //         'November',
  //         'December',
  //       ],
  //       datasets: [
  //         {
  //           label: 'Sell per week',
  //         //  lineTension: 0.2, 
  //           fill: false,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: this.deneme2.split(','),
  //           spanGaps: false,
            
  //         },
  //       ],
  //     },
  //   });
   
   
  // }
  createChart(){
    console.log(this.deneme2.split(','))
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['1', '2', '3','4' ], 
	       datasets: [
          {
            label: "Pulse",
            data: this.deneme2.split(','),
            backgroundColor: 'blue'
          }
            
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  colorize( ){
    if(this.stat==1){
      this.color='red';
      this.situation='EMERGENCY'
    }
   
    return this.color;
  }
  showGraph(){
    this.createChart();
  }
  // chartoptions = {
  //   title: {
  //     text: "Basic Column Chart in Angular"
  //   },
  //   data: [{
  //     type: "column",
  //     dataPoints: [
  //       { label: "Apple",  y: 10  },
  //       { label: "Orange", y: 15  },
  //       { label: "Banana", y: 25  },
  //       { label: "Mango",  y: 30  },
  //       { label: "Grape",  y: 28  }
  //     ]
  //   }]                
  // };
  
}
