StandClear = Ember.Application.create();

StandClear.doorController = Ember.Controller.create({
  doorsOpen: true,
  toggleDoors:function(e){
   if(!this.get('doorsOpen')) {
     this.set('doorsOpen', true); 
   }	
   else{
     this.set('doorsOpen', false)	
   }
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

