StandClear = Ember.Application.create();

StandClear.Doors = Ember.Object.extend({
    door_state : null,
    opens: 0,
    closes: 0
});

StandClear.doorController = Ember.Controller.create({
   doorsOpen: true,
   toggleDoors:function(e){
     this.doorsOpen = (this.doorsOpen === false) ? true : false; 
     console.log(this.doorsOpen);
   }
});

StandClear.DoorView = Ember.View.extend({
  tagName: 'div',
  classNames:['car-door'],
  classNameBindings: 'StandClear.doorController.doorsOpen',
})

StandClear.DoorStateView = Ember.View.extend({
  tagName: 'button',
  classNames:['door-controller'],
  click:function(e){
    StandClear.doorController.toggleDoors();
  }
});

