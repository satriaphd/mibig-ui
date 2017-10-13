class GeneralStat {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  };
}

class Record {
  constructor(type, count, description) {
    this.type = type;
    this.count = count;
    this.description = description;
  }
}

export default class StatsService{
  constructor($http){
    this.$http = $http;
  };

  generalStats() {
    let general_stats = [
      new GeneralStat('Foo', 17),
      new GeneralStat('Bar', 23),
      new GeneralStat('Baz', 42),
    ]
    return general_stats;
  };

  getRecords() {
    return [
      new Record('nrps', 17, 'Nonribosomal peptide'),
      new Record('t1pks', 23, 'Type I polyketide'),
    ];
  }
}
