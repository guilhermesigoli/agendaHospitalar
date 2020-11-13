import { DocsListService } from './docs-list.service';
import { environment } from 'src/environments/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss']
})
export class DocsListComponent implements OnInit {
  @ViewChild('successModalLauncher') modalLauncher: ElementRef;
  
  tableData = [];
  doctor = null;

  constructor(
    private readonly router: Router,
    private readonly docsListService: DocsListService
  ) { }

  ngOnInit(): void {
    if(!environment.isLogged) {
      this.router.navigate(['/docs']);
    }

    this.getDocsList()
  }

  getDocsList(){
    this.docsListService.getDocsList().subscribe(
      (res: []) => {
        this.tableData = res;
      }
    )
  }

  setDoc(doc){
    console.log(doc)
    this.doctor = doc;
    this.modalLauncher.nativeElement.click();
  }

}
