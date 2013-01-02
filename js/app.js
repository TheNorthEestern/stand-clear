var StandClear = Ember.Application.create();

StandClear.doors = Ember.Object.create({
    doorsOpen: false,
    opens:0,
    closes: 0
});

StandClear.doorController = Ember.Controller.create({
    toggleDoors:function(e){
         if(!StandClear.get('doors.doorsOpen')) {
            StandClear.set('doors.doorsOpen', true);
            StandClear.doors.incrementProperty('opens');
            console.log(StandClear.get('doors.opens'));  
         }
         else{
            StandClear.set('doors.doorsOpen', false);
            StandClear.doors.incrementProperty('closes');
         }
       }
});

StandClear.DoorView = Ember.View.extend({
    tagName: 'div',
    classNames:['car-door'],
    classNameBindings: 'StandClear.doors.doorsOpen'
});

StandClear.DoorStateView = Ember.View.extend({
    tagName: 'button',
    classNames:['door-controller'],
    click: function(e){
      StandClear.doorController.toggleDoors();
    }
});
