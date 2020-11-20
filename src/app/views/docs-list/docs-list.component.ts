import { DocsListService } from './docs-list.service';
import { environment } from 'src/environments/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-docs-list',
  templateUrl: './docs-list.component.html',
  styleUrls: ['./docs-list.component.scss']
})
export class DocsListComponent implements OnInit {
  @ViewChild('successModalLauncher') modalLauncher: ElementRef;

  tableData = [];
  backUpData = [];
  doctor = null;
  searchForm: FormGroup = null;
  username: string;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly docsListService: DocsListService
  ) {
    this.searchForm = this.formBuilder.group({
      name: [null],
      specialty: [null],
    });
  }

  ngOnInit(): void {
    if (!environment.isLogged) {
      this.router.navigate(['/login']);
    }
    this.username = JSON.parse(sessionStorage.getItem('user'))[0].name;

    this.getDocsList()
  }

  getDocsList() {
    this.docsListService.getDocsList().subscribe(
      (res: []) => {
        this.tableData = res;
        this.backUpData = res;
      }
    )
  }

  setDoc(doc) {
    console.log(doc)
    this.doctor = doc;
    this.modalLauncher.nativeElement.click();
  }


  search() {
    this.tableData = [];
    this.backUpData.forEach(e => {
      const name = this.searchForm.get('name').value?.toLowerCase();
      const specialty = this.searchForm.get('specialty').value?.toLowerCase();

      if (name && specialty) {
        if (e.name.toLowerCase().includes(name) && e.specialty.toLowerCase().includes(specialty)) {
          this.tableData.push(e)
        }
      } else if (name) {
        if (e.name.toLowerCase().includes(name)) {
          this.tableData.push(e)
        }
      } else if (specialty) {
        if (e.name.toLowerCase().includes(specialty)) {
          this.tableData.push(e)
        }
      }
    })
  }

  clearSearch() {
    this.tableData = [];
    this.backUpData.forEach(e => {
      this.tableData.push(e)
    })

    this.searchForm.reset();
  }

}
