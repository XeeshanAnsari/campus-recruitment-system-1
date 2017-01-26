import { Injectable } from '@angular/core';
import { AngularFire,FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';
import { Router } from '@angular/router'
import { Observable,Observer } from 'rxjs';
import { User } from '../models'
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

@Injectable()
export class CompanyService {
    
    constructor(public af: AngularFire,private router: Router) {
        //this.users = this.af.database.object("/users")
    }
    postJob(userId: string, value:any){
        this.af.database.list("/jobs/"+userId).push(value)
        .then(val=>{
            console.log("after post ",val);
            //this.router.navigate(['./../list-jobs']);
            
        });
    }

    getJobList(companyId: any){
        return this.af.database.list("/jobs/"+companyId)
    }



}