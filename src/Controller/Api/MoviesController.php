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

        if ($genre = $request->query->get('genre')) {
            $rows = $db->createQueryBuilder()
            ->select("m.*")
            ->from("movies", "m")
            ->join("m", "movies_genres", "mg", "m.id = mg.movie_id")
            ->where("mg.genre_id = :genre_id")
            ->orderBy($orderBy, "DESC")
            ->setMaxResults(5)
            ->setParameter('genre_id', $genre)
            ->executeQuery()
            ->fetchAllAssociative();

            return $this->json([
                "movies" => $rows
            ]);
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
}
