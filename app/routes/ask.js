import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
actions: {

    saveQ() {/*
      var params = {
        inquiry: this.get('question1'),
     };*/
     var theQuestion = this.get('question1');
     var myRecord = this.store.createRecord('question', {
        inquiry: 'Soup?',
      });
      myRecord.inquiry = theQuestion;
      myRecord.save();
   }

}


});
