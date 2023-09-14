package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity // esto hace que jakarta se importe solo
// boilerplate - Repetitivo
// con lombok, hibernate y springboot, simplificamos muchas líneas de código
// anteriormente para hacer lo mismo utilizamos +80 líneas de código, ahora solo 28
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}