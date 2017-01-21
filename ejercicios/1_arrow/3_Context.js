'use strict'
const DataSource = require ('./.././dataSource');

function FooCtrl (FooService) {
  this.user = {};
  const _this = this;

  FooService
    .getUser(function (response) {
      _this.user = response;
    });
}

const data = new DataSource();
const ctrs = new FooCtrl(data);

console.log(ctrs.user.name, ctrs.user.age)
