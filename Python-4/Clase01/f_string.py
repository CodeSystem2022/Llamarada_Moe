# En la interpolación, a los { } se les dice Placeholder, y no se les dice llaves
nombre = 'Pepe'
edad = 28
sueldo = 3000
mensaje = f'Nombre {nombre} Edad {edad} Sueldo {sueldo:.2f}'
print(mensaje)

print(nombre, edad, sueldo, sep=' & ')
# sep = para añadir algo entre la separación de las variables
