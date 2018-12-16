import json
import requests

class OCRUtil:

    def getTextFromImage(img):


        # Replace <Subscription Key> with your valid subscription key.
        subscription_key = "5c894f6d28894945ae1ad243d8f1fd18"

        assert subscription_key

        # You must use the same region in your REST call as you used to get your
        # subscription keys. For example, if you got your subscription keys from
        # westus, replace "westcentralus" in the URI below with "westus".
        #
        # Free trial subscription keys are generated in the "westus" region.
        # If you use a free trial subscription key, you shouldn't need to change
        # this region.
        vision_base_url = "https://uksouth.api.cognitive.microsoft.com/vision/v2.0/"
        ocr_url = vision_base_url + "ocr"

        # Set image_url to the URL of an image that you want to analyze.
        # image_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/" + \
        #    "Atomist_quote_from_Democritus.png/338px-Atomist_quote_from_Democritus.png"

        # headers = {'Ocp-Apim-Subscription-Key': subscription_key}
        # params  = {'language': 'unk', 'detectOrientation': 'true'}
        # data    = {'url': image_url}
        # response = requests.post(ocr_url, headers=headers, params=params, json=data)
        # response.raise_for_status()

        # Set image_path to the local path of an image that you want to analyze.
        # image_path = "..."

        # Read the image into a byte array
        # image_data = open(image_path, "rb").read()

        headers = {'Ocp-Apim-Subscription-Key': subscription_key,
                   'Content-Type': 'application/octet-stream'}
        params = {'visualFeatures': 'Categories,Description,Color'}
        try:
            response = requests.post(ocr_url, headers=headers, params=params, data=img)
        except requests.exceptions as err:
            print(err)

        analysis = response.json()

        print(analysis)

        return OCRUtil.getText(analysis)

    def getText(json):
        regions = json.get("regions")
        text = ""

        for region in regions:
            lines = region.get("lines")
            for line in lines:
                for word in line["words"]:
                    text += word["text"] + " "

        # Reduce length by one to eliminate the last space
        return text[:-1]