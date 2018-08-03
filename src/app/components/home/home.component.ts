import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import * as convert from 'xml-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public files: UploadFile[] = [];
  isLoading: boolean = false;
  currentState: string;
  constructor() { }

  ngOnInit() {
  }
  public dropped(event: UploadEvent) {
    this.currentState = "receiving upload";
    this.isLoading = true;
    this.files = event.files;

    for (const droppedFile of event.files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          const reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = function (evt) {
            this.currentState = 'uploaded successfully';
            console.log('file reader success');
            try{
              this.currentState = 'parsing save file...';
            const result = JSON.parse(convert.xml2json(evt.target.result, {compact: false, spaces: 4}));
              this.currentState = 'parsed successfully';
              this.isLoading = false;
              console.log(result);
              const host = result.elements.filter(element => {
                return element.name === 'player';
              });
              console.log(host);
            } catch(e) {
              console.log(e);

            }
            // const json = JSON.parse(evt.target.result);
            // that.update(json.seeds[0]);
        }.bind(this);

          // console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }


}
