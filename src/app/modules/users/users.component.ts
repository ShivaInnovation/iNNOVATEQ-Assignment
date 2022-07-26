import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.model';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isShown: boolean = false ;
  users: User[] = [];
  displayedColumns = ['name', 'username', 'email', 'website'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.onGetUsers();  
    this.onGetTableUsers();
  }

 
  onGetUsers(): void{
    this.userService.getUsers().subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
  });
  }

  onGetTableUsers():void{
    this.userService.getUsers().subscribe({
      next: response => {
        this.dataSource = new MatTableDataSource(response),
        this.dataSource.paginator = this.paginator,
        this.dataSource.sort = this.sort
      
      },
      error: error => console.log(error)
  });
  }

  toggleShow() {
    this.isShown = !this.isShown;
    this.onGetUsers();
    this.onGetTableUsers();    
    }
}
