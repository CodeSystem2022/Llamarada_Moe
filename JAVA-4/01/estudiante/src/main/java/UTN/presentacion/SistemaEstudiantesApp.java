package UTN.presentacion;

import UTN.datos.EstudianteDAO;
import UTN.dominio.Estudiante;

import java.util.Scanner;

public class SistemaEstudiantesApp {
    public static boolean main(String[] args) {
        var salir = false;
        var consola = new Scanner(System.in); // Para leer información de la consola
        // Se crea una instancia de la clase servicio, esto lo hacemos fuera del ciclo
        var estudianteDao = new EstudianteDAO(); // Esta instancia debe hacerse una vez
        while (!salir) {
            try {
                mostrarMenu(); // Mostramos el menú
                // Este será el método ejecutarOpciones que devolverá un booleano
                salir = ejecutarOpciones(consola, estudianteDao); // Este arroja una exception
            } catch (Exception e) {
                System.out.println("Ocurrió un error al ejecutar la operacion: " + e.getMessage());
            }
        } // Fin del ciclo while
    } // Fin del main


    private static void mostrarMenu() {
        System.out.println("""
                ****** Sistema de Estudiantes ******
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiante
                4. Modificar Estudiante
                5. Eliminar Estudiante
                6. Salir
                Elige una opción:
                """);
    }

    // Método para ejecutar las opciones, va a regresar un valor booleano, ya que es el que puede modificar el valor de la variable salir, si es verdadero termina el ciclo while
    private static boolean ejecutarOpciones(Scanner consola, EstudianteDAO estudianteDAO) {
        var opcion = Integer.parseInt(consola.nextLine());
        var salir = false;
        switch (opcion) {
            case 1 -> { //Listar estudiante
                System.out.println("Listado de Estudiantes...");
                //no muestra la información, solo recupera la info y regresa una lista
                var estudiantes = estudianteDAO.listarEstudiantes(); //recibe el listado
                // vamos a iterar cada objeto de tipo estudiante
                estudiantes.forEach(System.out::println); // para imprimir la lista
            } // Fin case 1

            case 2 -> { //Buscar estudiante por ID
                System.out.println("Introduce el id_estudiante a buscar: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var encontrado = estudianteDAO.buscarEstudiantePorId(estudiante);
                if (encontrado)
                    System.out.println("Estudiante encontrado: " + estudiante);
                else
                    System.out.println("Estudiante NO encontrado: " + estudiante);
            } // Fin case 2

            case 3 -> { // Agregar estudiante
                System.out.println("Agregar estudiante: ");
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                // crear objeto estudiante (SIN ID)
                var estudiante = new Estudiante(nombre, apellido, telefono, email);
                var agregado = estudianteDAO.agregarEstudiante(estudiante);
                if (agregado)
                    System.out.println("Estudiante agregado: " + estudiante);
                else
                    System.out.println("Estudiante NO agregado: " + estudiante);
            } // Fin case 3

            case 4 -> {// Modificar estudiante
                System.out.println("Modificar estudiante: ");
                // Aqui lo primero es especificar cuál es el ID del objeto a modificar
                System.out.println("ID Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                System.out.println("Nombre: ");
                var nombre = consola.nextLine();
                System.out.println("Apellido: ");
                var apellido = consola.nextLine();
                System.out.println("Telefono: ");
                var telefono = consola.nextLine();
                System.out.println("Email: ");
                var email = consola.nextLine();
                // crear objeto estudiante a modificar
                var estudiante = new Estudiante(idEstudiante, nombre, apellido, telefono, email);
                var modificado = estudianteDAO.modificarEstudiante(estudiante);
                if (modificado)
                    System.out.println("Estudiante modificado: " + estudiante);
                else
                    System.out.println("Estudiante NO modificado: " + estudiante);
            } // Fin case 4

            case 5 -> {// Eliminar estudiante
                System.out.println("Eliminar estudiante: ");
                System.out.println("ID Estudiante: ");
                var idEstudiante = Integer.parseInt(consola.nextLine());
                var estudiante = new Estudiante(idEstudiante);
                var eliminado = estudianteDAO.eliminarEstudiante(estudiante);
                if (eliminado)
                    System.out.println("Estudiante eliminado: " + estudiante);
                else
                    System.out.println("Estudiante NO eliminado: " + estudiante);
            } // Fin case 5

            case 6 -> { // Salir
                System.out.println("Hasta pronto!!!");
                salir = true;
            } // Fin case 6

            default -> System.out.println("Opción no reconocida, ingrese otra opción: ");
        } // Fin del switch
        return salir;
    }
} // Fin clase