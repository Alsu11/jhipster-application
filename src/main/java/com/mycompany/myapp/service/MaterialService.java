package com.mycompany.myapp.service;

import com.mycompany.myapp.domain.Material;
import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing {@link com.mycompany.myapp.domain.Material}.
 */
public interface MaterialService {
    /**
     * Save a material.
     *
     * @param material the entity to save.
     * @return the persisted entity.
     */
    Material save(Material material);

    /**
     * Updates a material.
     *
     * @param material the entity to update.
     * @return the persisted entity.
     */
    Material update(Material material);

    /**
     * Partially updates a material.
     *
     * @param material the entity to update partially.
     * @return the persisted entity.
     */
    Optional<Material> partialUpdate(Material material);

    /**
     * Get all the materials.
     *
     * @return the list of entities.
     */
    List<Material> findAll();

    /**
     * Get the "id" material.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<Material> findOne(Long id);

    /**
     * Delete the "id" material.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
