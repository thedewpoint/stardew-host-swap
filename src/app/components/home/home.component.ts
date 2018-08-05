import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry } from 'ngx-file-drop';
import * as convert from 'xml-js';
import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public files: UploadFile[] = [];
  fileName: string;
  saveGame: any;
  isLoading: boolean = false;
  currentState: string;
  newHost: string;
  farmHands: any[];
  farmHandNames: string[];
  currentHost: string;
  player: any;
  constructor() {}
  ngOnInit() {}
  public dropped(event: UploadEvent) {
    this.currentState = 'receiving upload';
    this.isLoading = true;
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const reader = new FileReader();
          this.fileName = file.name;
          reader.readAsText(file, 'UTF-8');
          reader.onload = function (evt) {
            this.currentState = 'uploaded successfully';
            try {
              this.currentState = 'parsing save file...';
              this.saveGame = JSON.parse(convert.xml2json(evt.target.result, {compact: false, spaces: 4}));
              this.currentState = 'parsed successfully';
              this.isLoading = false;
              this.player = this.getPlayer(this.saveGame);
              this.currentHost = this.getFarmHandNames([this.player])[0];
              this.farmHands = this.getFarmHands(this.saveGame);
              this.farmHandNames = this.getFarmHandNames(this.farmHands);
            } catch (e) {
              console.log(e);
            }
        }.bind(this);
        });
      }
    }
  }

  saveChanges() {
    const selectedFarmHand = this.farmHands.find(farmHand => {
      const nameNode = this.elementFilter(farmHand.elements, 'name')[0];
      return nameNode.elements[0].text === this.newHost;
    });
    const player = this.getPlayer(this.saveGame);
    player.elements = [selectedFarmHand.elements, selectedFarmHand.elements = player.elements][0];
    const xml = convert.json2xml(this.saveGame);
    console.log(xml);
    const blob = new Blob([xml]);
    fileSaver.saveAs(blob, this.fileName);
  }
  getPlayer(gameData: any) {
    const player = gameData.elements[0].elements.filter(element => {
      return element.name === 'player';
    });
    return player[0];
  }
  getFarmHandNames(farmHands: any[]) {
    const names = farmHands.filter(farmHand => {
      const nameNode = this.elementFilter(farmHand.elements, 'name')[0];
        return nameNode.elements;
    }).map(farmHand => {
      const nameNode = this.elementFilter(farmHand.elements, 'name')[0];
      return nameNode.elements[0].text;
    });
    return names;
  }
  getFarmHands(gameData: any) {
    const indoors = this.getIndoors(gameData);
    const farmHands = indoors.map(indoor => {
      return this.elementFilter(indoor.elements, 'farmhand')[0];
    });
    return farmHands;
  }
  getIndoors(gameData: any) {
    const buildings = this.getBuildings(gameData);
    const indoors = buildings.elements.map(building => {
      return this.elementFilter(building.elements, 'indoors')[0];
    });
    return indoors;
  }
  getBuildings(gameData: any) {
    const farmLocation = this.getFarmLocation(gameData);
    return this.elementFilter(farmLocation.elements, 'buildings')[0];
  }
  getFarmLocation(gameData: any) {
   const locations = this.getLocations(gameData);
   return this.elementFilter(locations.elements, 'GameLocation', 'Farm')[0];
  }
  getLocations(gameData: any) {
    return this.elementFilter(gameData.elements[0].elements, 'locations')[0];
  }
  elementFilter(elements, name, xsiType?) {
    const filtered = elements.filter(element => {
      if (name && xsiType) {
        return element.name === name && element.attributes && element.attributes['xsi:type'] === xsiType;
      }
      if (name) {
        return element.name === name;
      }
    });
    return filtered;
  }

}
