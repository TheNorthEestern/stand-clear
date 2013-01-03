var StandClear = Ember.Application.create();

StandClear.doors = Ember.Object.create({
    doorsOpen: true,
    lastAction: "",
    opens:0,
    closes: 0
});

StandClear.doorController = Ember.Controller.create({
    toggleDoors:function(e){
         if(!StandClear.get('doors.doorsOpen')) {
            StandClear.set('doors.doorsOpen', true);
            StandClear.set('doors.lastAction', 'open');
            StandClear.doors.incrementProperty('opens');
         }
         else{
            StandClear.set('doors.doorsOpen', false);
            StandClear.set('doors.lastAction', 'closed');
            StandClear.doors.incrementProperty('closes');
         }
       }
});

StandClear.DoorView = Ember.View.extend({
    tagName: 'div',
    classNames:['car-door'],
    classNameBindings: 'StandClear.doors.doorsOpen'
});

StandClear.DoorClosureLampView = Ember.View.extend({
    tagName: 'div',
    classNames:['door-lamp', 'closure-lamp'],
    classNameBindings: 'StandClear.doors.doorsOpen::door-closure-lamp-on',
});

StandClear.DoorOpenLampView = Ember.View.extend({
  tagName: 'div',
  classNames:['door-lamp', 'open-lamp'],
  classNameBindings: 'StandClear.doors.doorsOpen:door-open-lamp-on'
})

StandClear.DoorStateView = Ember.View.extend({
    tagName: 'button',
    classNames:['door-controller'],
    click: function(e){
      StandClear.doorController.toggleDoors();
    }
});
