package rinocerontes.de.java.save.wil.dlife.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import rinocerontes.de.java.save.wil.dlife.models.Family;
import rinocerontes.de.java.save.wil.dlife.repositories.FamilyRepository;

@Service
public class FamilyService {

    FamilyRepository repository;

    public FamilyService( FamilyRepository repository){
        this.repository = repository;
    }

    public List<Family> getAll(){
        List<Family> families = repository.findAll();
        return families;
    }

    public Family findById(Long id){
        Family family = repository.findById(id).orElseThrow();
        return family;
    }

    public Family save(Family country) {

        if (country.getName() == "") {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "name empty");
        }

        Family countrySaved = repository.save(country);
        return countrySaved;
    }

    public Map<String, String> delete(long id){
        Family family = repository.findById(id).orElseThrow();
        repository.deleteById(family.getId());

        Map<String, String> msg = new HashMap<>();
        msg.put("message", "Family" + family.getName() + "successfully deleted!");

        return msg;
    }
}
