<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\DBAL\Connection;

class MoviesController extends AbstractController
{
    #[Route('/api/movies')]
    public function list(Connection $db, Request $request): Response
    {
        $orderBy = "m.release_date";

        if ($request->query->has('rating')) {
            $orderBy = "m.rating";
        }

        $rows = $db->createQueryBuilder()
            ->select("m.*")
            ->from("movies", "m")
            ->orderBy($orderBy, "DESC")
            ->setMaxResults(5)
            ->executeQuery()
            ->fetchAllAssociative();

        return $this->json([
            "movies" => $rows
        ]);
    }


    #[Route('/api/genres')]
    public function prova(Connection $db, Request $request): Response
    {
        // id del genere selezionato
        $genreId = $request->request->get('genres_select');

        $rows = $db->createQueryBuilder()
            ->select("m.*")
            ->from("movies", "m")
            ->join("m", "movies_genres", "mg", "m.id = mg.movie_id")
            ->where("mg.genre_id = :genre_id")

            ->setMaxResults(5)
            ->setParameter('genre_id', $genreId)
            ->executeQuery()
            ->fetchAllAssociative();

        return $this->json([
            "movies" => $rows
        ]);
    }
}
