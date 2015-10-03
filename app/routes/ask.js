import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
actions: {
   saveQ() {
     var params = {
       inquiry: this.get('question1'),
       author: this.get('author'),
     };
     debugger;

     var myRecord = this.store.createRecord('question', {
        inquiry: 'Soup?',
      });
      myRecord.save();
      this.transitionTo('index');
  }
}

});
