# 2.3 Tipo float como constructor y comienzo de exponencial
# Profundizando en el tipo float
a = 3.0
# print(f'a: {a:.2f}')

# Constructor de tipo float -> puede recibir int y str's
a = float(10) # Le pasamos directamente un tipo entero (int)
a = float('10')
print(f'a: {a:.2f}')

# Notación exponencial (valores positivos o negativos)
a = 3e5 # mostrará 5 ceros
# a = 3e50 # mostrará que lleva 50 ceros de forma explícita
print(f'a: {a:.2f}')


# 2.4 Exponencial negativo y positivo
a = 3e-5
print(f'a: {a:.5f}')

# Cualquier cálculo que incluya un float, todo cambia a float

a = 4.0 + 5
print(a)
print(type(a))

