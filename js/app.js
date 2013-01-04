var StandClear = Ember.Application.create();

StandClear.doors = Ember.Object.create({
    doorsOpen: true,
    lastAction: "",
    opens:0,
    closes: 0
});

StandClear.ApplicationController = Ember.ObjectController.extend({
  toggleDoors:function(){
         if(!this.get('doorsOpen')) {
            this.set('doorsOpen', true);
            this.set('lastAction', 'open');
            this.incrementProperty('opens');
         }
         else{
            this.set('doorsOpen', false);
            this.set('lastAction', 'closed');
            this.incrementProperty('closes');
         }
  } 
});

StandClear.applicationController = StandClear.ApplicationController.create();

StandClear.ApplicationView = Ember.View.extend({
    templateName: 'doors',
    init: function(){
       this.set("controller", StandClear.applicationController);
       this.set("controller.content", StandClear.doors);
    }
});
