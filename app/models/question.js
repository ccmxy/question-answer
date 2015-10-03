import DS from 'ember-data';

export default DS.Model.extend({
  inquiry: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
