var fs = require('fs');
var path = require('path');
var plist = require('plist'); // npm install --save plist

let plistDir = path.join(
  __dirname,
  '../platforms/ios/EduKate/EduKate-Info.plist'
);

replaceATS();

function replaceATS() {
  var xml = fs.readFileSync(plistDir, 'utf8');
  var obj = plist.parse(xml);

  console.log(obj);
  obj.NSPhotoLibraryAddUsageDescription = 'This app needs to use your photo library to upload pictures as Questions Answers.';
  obj.NSPhotoLibraryUsageDescription = 'This app needs to use your photo library to upload pictures as Questions Answers.';
  obj.NSCameraUsageDescription = 'This app needs to use your camera to upload pictures as Questions Answers.';

  xml = plist.build(obj);
  fs.writeFileSync(plistDir, xml, { encoding: 'utf8' });
}
