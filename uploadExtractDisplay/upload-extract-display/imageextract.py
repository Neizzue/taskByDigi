#1) pass variables via function

#from PIL import Image
import base64
import io
import zipfile as ZipFile

def unzipDisplay():

    file_name = "./pokemonUnite.zip"
    zip=ZipFile(file_name, 'r')
    zip.extractall()

    for i in range(len(zip.namelist())):
        file_in_zip = zip.namelist()[i]

        data_uri = base64.b64encode(open(file_in_zip, 'rb').read()).decode('utf-8')
        img_tag = '<img src="data:image/png;base64,{0}">'.format(data_uri)
        print(file_in_zip)
                
        
        # Full Script.
        im = Image.open(file_in_zip)
        data = io.BytesIO()
        im.save(data, "JPEG")
        encoded_img_data = base64.b64encode(data.getvalue())

        return render_template("indexTT.html", img_data=encoded_img_data.decode('utf-8'))
    

#2) shortest possible method using python, but cannot communicate with html

# import zipfile
# from io import BytesIO
# from PIL import Image
# import imghdr
# import IPython.display as display

# file_name = "pokemonUnite.zip"
# zip=ZipFile(file_name, 'r')
# zip.extractall()

# for i in range(len(zip.namelist())):
#     file_in_zip = zip.namelist()[i]
#     display.display(Image.open(file_in_zip))
