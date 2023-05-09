import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    });

    // // * basic use of promises
    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hello World');
    //   } else {
    //     reject('Something went wrong');
    //   }
    // });
    // promise
    //   .then((msg) => {
    //     console.log(msg);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log('Fin del ini');
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users?page=1')
        .then((resp) => resp.json())
        .then((body) => console.log(body.data));
    });
  }
}
