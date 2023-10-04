package tienda_libros.vista;

import org.springframework.beans.factory.annotation.AutoWired;
import tienda_libros.servicio.LibroServicio;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;

public class LibroForm extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;

    @AutoWired
    public LibroForm(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
    }

}