import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Platform, normalizeURL } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
const IMAGE_QUALITY = 80;

@Injectable()
export class PhotoProvider {
  private cameraOptions: CameraOptions;
  private imagePickerOptions: ImagePickerOptions;

  constructor(
    private camera: Camera,
    private imagePicker: ImagePicker,
    private platform: Platform
  ) {}

  private _hasPermission() {
    return this.imagePicker.hasReadPermission();
  }

  private _requestPermission() {
    return this.imagePicker.requestReadPermission();
  }

  ready() {
    return this.platform.ready().then(() => {
      this.cameraOptions = {
        quality: IMAGE_QUALITY,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        // correctOrientation: true,
        // allowEdit: true
      } as CameraOptions;

      this.imagePickerOptions = {
        maximumImagesCount: 1,
        quality: IMAGE_QUALITY
      };
    });
  }

  getPicture(maximumImagesCount: number = 1): Promise<string> {
    return new Promise((resolve, reject) => {
      this.ready()
        .then(() => {
          return this._hasPermission().then(hasPermission => {
            if (hasPermission) {
              this.imagePickerOptions.maximumImagesCount = 1;
              return this.imagePicker.getPictures(this.imagePickerOptions);
            } else {
              this._requestPermission().then(() => {
                this.imagePickerOptions.maximumImagesCount = 1;
                return this.imagePicker.getPictures(this.imagePickerOptions);
              });
            }
          });
        })
        .then(res => {
          console.log(`Image URL ${res}`);
          let imageUrl =  this.convertFilePathToUrl(res[0]);
          console.log(`Image URL after ${imageUrl}`);
          resolve(imageUrl);
        });
    });
  }

  getCameraPicture(): Promise<string> {
    return new Promise((resolve, reject) => {
      return this.ready()
        .then(() => {
          return this.camera.getPicture(this.cameraOptions);
        })
        .then(res => {
          console.log(`Image URL ${res}`);
          let imageUrl = this.convertFilePathToUrl(res);
          console.log(`Image URL after ${imageUrl}`);
          resolve(imageUrl);
        });
    });
  }

  convertFilePathToUrl(path: string): string {
    if(this.platform.is('ios')){
      return normalizeURL(path);
    }
    return path.replace(/^file:\/\//, '');
  }
}
