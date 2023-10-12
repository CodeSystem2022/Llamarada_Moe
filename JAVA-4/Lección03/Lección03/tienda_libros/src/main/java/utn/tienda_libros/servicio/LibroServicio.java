package tienda_libros.servicio;

import org.springframework.stereotype.Service;
import tienda_libros.repositorio.LibroRepositorio;

import java.util.List;

@Service
public class LibroServicio implements ILibroServicio {

    @AutoWired
    private LibroRepositorio libroRepositorio;

    @Override
    public List<Libro> listarLibros() {
        return libroRepositorio.findAll();
    }

    @Override
    public Libro buscarLibroPorId(Integer idLibro) {
        Libro libro = libroRepositorio.findById(idLibro).orElse(null);
        return libro;
    }

    @Override
    public void guardarLibro(Libro libro) {
        libroRepositorio.save(libro);

    }

    @Override
    public void eliminarLibro(Libro libro) {
        libroRepositorio.delete(libro);
    }
}