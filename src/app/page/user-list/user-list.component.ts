
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  nameInput: string = "";
  actualId: number = 0;
  kerdes: boolean = false;
  biztosTorol: boolean = false;
  sortByThis: string = "";
  constructor(
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  onDelete(id: number) {
    this.kerdes = true;
    this.actualId = id;

  };
  torolniSzeretnem() {
    this.userService.delete(this.actualId).subscribe(() =>
      this.users$ = this.userService.getAll()
    );
    this.kerdes = false;
  };
  nemTorlom() {
    this.actualId = 0;
    this.kerdes = false;
  };
  sortTableBy(szoveg: string): void {
    this.sortByThis = szoveg;
  };
  createUser() {
    this.router.navigate(['/user/0'])
  }
  // [routerLink]="['user/' + user.id]"

}
