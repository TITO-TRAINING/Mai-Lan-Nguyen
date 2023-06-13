class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!this.graph[this.place].includes(destination)) {
      return this;
    }
    let parcels = this.parcels
      .map((p) => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      })
      .filter((p) => p.place != p.address);
    return new VillageState(destination, parcels);
  }

  static random(graph, parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(graph));
      let place;
      do {
        place = randomPick(Object.keys(graph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
  }

  static from(graph, parcels) {
    return new VillageState('Post Office', parcels);
  }
}

module.exports = { VillageState };
