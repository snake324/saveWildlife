package rinocerontes.de.java.save.wil.dlife.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import rinocerontes.de.java.save.wil.dlife.models.Family;

public interface FamilyRepository extends JpaRepository<Family,Long> {
    
}
