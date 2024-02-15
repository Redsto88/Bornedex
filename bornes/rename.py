import os

for i in range(500,553):
    nom = str(i)+".jpg"
    nom2 = str(i-13)+".jpg"
    try:
        os.rename(nom,nom2)
    except:
        print("aie")