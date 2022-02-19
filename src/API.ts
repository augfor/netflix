/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  movies?: ModelMovieConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelMovieConnection = {
  __typename: "ModelMovieConnection",
  items:  Array<Movie | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Movie = {
  __typename: "Movie",
  id: string,
  title: string,
  poster: string,
  year?: number | null,
  numberOfSeasons?: number | null,
  plot?: string | null,
  cast?: string | null,
  creator?: string | null,
  categoryID: string,
  seasons?: ModelSeasonConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  categoryMoviesId?: string | null,
  owner?: string | null,
};

export type ModelSeasonConnection = {
  __typename: "ModelSeasonConnection",
  items:  Array<Season | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Season = {
  __typename: "Season",
  id: string,
  name: string,
  movieID: string,
  episodes?: ModelEpisodeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  movieSeasonsId?: string | null,
  owner?: string | null,
};

export type ModelEpisodeConnection = {
  __typename: "ModelEpisodeConnection",
  items:  Array<Episode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Episode = {
  __typename: "Episode",
  id: string,
  title: string,
  poster: string,
  duration: string,
  plot?: string | null,
  video: string,
  seasonID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  seasonEpisodesId?: string | null,
  owner?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateMovieInput = {
  id?: string | null,
  title: string,
  poster: string,
  year?: number | null,
  numberOfSeasons?: number | null,
  plot?: string | null,
  cast?: string | null,
  creator?: string | null,
  categoryID: string,
  _version?: number | null,
  categoryMoviesId?: string | null,
};

export type ModelMovieConditionInput = {
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  year?: ModelIntInput | null,
  numberOfSeasons?: ModelIntInput | null,
  plot?: ModelStringInput | null,
  cast?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  and?: Array< ModelMovieConditionInput | null > | null,
  or?: Array< ModelMovieConditionInput | null > | null,
  not?: ModelMovieConditionInput | null,
  categoryMoviesId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMovieInput = {
  id?: string | null,
  title?: string | null,
  poster?: string | null,
  year?: number | null,
  numberOfSeasons?: number | null,
  plot?: string | null,
  cast?: string | null,
  creator?: string | null,
  categoryID: string,
  _version?: number | null,
  categoryMoviesId?: string | null,
};

export type DeleteMovieInput = {
  categoryID: string,
  _version?: number | null,
};

export type CreateSeasonInput = {
  id?: string | null,
  name: string,
  movieID: string,
  _version?: number | null,
  movieSeasonsId?: string | null,
};

export type ModelSeasonConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSeasonConditionInput | null > | null,
  or?: Array< ModelSeasonConditionInput | null > | null,
  not?: ModelSeasonConditionInput | null,
  movieSeasonsId?: ModelIDInput | null,
};

export type UpdateSeasonInput = {
  id?: string | null,
  name?: string | null,
  movieID: string,
  _version?: number | null,
  movieSeasonsId?: string | null,
};

export type DeleteSeasonInput = {
  movieID: string,
  _version?: number | null,
};

export type CreateEpisodeInput = {
  id?: string | null,
  title: string,
  poster: string,
  duration: string,
  plot?: string | null,
  video: string,
  seasonID: string,
  _version?: number | null,
  seasonEpisodesId?: string | null,
};

export type ModelEpisodeConditionInput = {
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  plot?: ModelStringInput | null,
  video?: ModelStringInput | null,
  and?: Array< ModelEpisodeConditionInput | null > | null,
  or?: Array< ModelEpisodeConditionInput | null > | null,
  not?: ModelEpisodeConditionInput | null,
  seasonEpisodesId?: ModelIDInput | null,
};

export type UpdateEpisodeInput = {
  id?: string | null,
  title?: string | null,
  poster?: string | null,
  duration?: string | null,
  plot?: string | null,
  video?: string | null,
  seasonID: string,
  _version?: number | null,
  seasonEpisodesId?: string | null,
};

export type DeleteEpisodeInput = {
  seasonID: string,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMovieFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  year?: ModelIntInput | null,
  numberOfSeasons?: ModelIntInput | null,
  plot?: ModelStringInput | null,
  cast?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelMovieFilterInput | null > | null,
  or?: Array< ModelMovieFilterInput | null > | null,
  not?: ModelMovieFilterInput | null,
  categoryMoviesId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSeasonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  movieID?: ModelIDInput | null,
  and?: Array< ModelSeasonFilterInput | null > | null,
  or?: Array< ModelSeasonFilterInput | null > | null,
  not?: ModelSeasonFilterInput | null,
  movieSeasonsId?: ModelIDInput | null,
};

export type ModelEpisodeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  plot?: ModelStringInput | null,
  video?: ModelStringInput | null,
  seasonID?: ModelIDInput | null,
  and?: Array< ModelEpisodeFilterInput | null > | null,
  or?: Array< ModelEpisodeFilterInput | null > | null,
  not?: ModelEpisodeFilterInput | null,
  seasonEpisodesId?: ModelIDInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateMovieMutationVariables = {
  input: CreateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type CreateMovieMutation = {
  createMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateMovieMutationVariables = {
  input: UpdateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type UpdateMovieMutation = {
  updateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteMovieMutationVariables = {
  input: DeleteMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type DeleteMovieMutation = {
  deleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateSeasonMutationVariables = {
  input: CreateSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type CreateSeasonMutation = {
  createSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSeasonMutationVariables = {
  input: UpdateSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type UpdateSeasonMutation = {
  updateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSeasonMutationVariables = {
  input: DeleteSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type DeleteSeasonMutation = {
  deleteSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateEpisodeMutationVariables = {
  input: CreateEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type CreateEpisodeMutation = {
  createEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateEpisodeMutationVariables = {
  input: UpdateEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type UpdateEpisodeMutation = {
  updateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEpisodeMutationVariables = {
  input: DeleteEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type DeleteEpisodeMutation = {
  deleteEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      movies?:  {
        __typename: "ModelMovieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      movies?:  {
        __typename: "ModelMovieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMovieQueryVariables = {
  categoryID: string,
};

export type GetMovieQuery = {
  getMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListMoviesQueryVariables = {
  categoryID?: string | null,
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListMoviesQuery = {
  listMovies?:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      title: string,
      poster: string,
      year?: number | null,
      numberOfSeasons?: number | null,
      plot?: string | null,
      cast?: string | null,
      creator?: string | null,
      categoryID: string,
      seasons?:  {
        __typename: "ModelSeasonConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryMoviesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMoviesQueryVariables = {
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMoviesQuery = {
  syncMovies?:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      title: string,
      poster: string,
      year?: number | null,
      numberOfSeasons?: number | null,
      plot?: string | null,
      cast?: string | null,
      creator?: string | null,
      categoryID: string,
      seasons?:  {
        __typename: "ModelSeasonConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryMoviesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSeasonQueryVariables = {
  movieID: string,
};

export type GetSeasonQuery = {
  getSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSeasonsQueryVariables = {
  movieID?: string | null,
  filter?: ModelSeasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSeasonsQuery = {
  listSeasons?:  {
    __typename: "ModelSeasonConnection",
    items:  Array< {
      __typename: "Season",
      id: string,
      name: string,
      movieID: string,
      episodes?:  {
        __typename: "ModelEpisodeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      movieSeasonsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSeasonsQueryVariables = {
  filter?: ModelSeasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSeasonsQuery = {
  syncSeasons?:  {
    __typename: "ModelSeasonConnection",
    items:  Array< {
      __typename: "Season",
      id: string,
      name: string,
      movieID: string,
      episodes?:  {
        __typename: "ModelEpisodeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      movieSeasonsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEpisodeQueryVariables = {
  seasonID: string,
};

export type GetEpisodeQuery = {
  getEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEpisodesQueryVariables = {
  seasonID?: string | null,
  filter?: ModelEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEpisodesQuery = {
  listEpisodes?:  {
    __typename: "ModelEpisodeConnection",
    items:  Array< {
      __typename: "Episode",
      id: string,
      title: string,
      poster: string,
      duration: string,
      plot?: string | null,
      video: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      seasonEpisodesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEpisodesQueryVariables = {
  filter?: ModelEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEpisodesQuery = {
  syncEpisodes?:  {
    __typename: "ModelEpisodeConnection",
    items:  Array< {
      __typename: "Episode",
      id: string,
      title: string,
      poster: string,
      duration: string,
      plot?: string | null,
      video: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      seasonEpisodesId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        year?: number | null,
        numberOfSeasons?: number | null,
        plot?: string | null,
        cast?: string | null,
        creator?: string | null,
        categoryID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        categoryMoviesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateMovieSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMovieSubscription = {
  onCreateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateMovieSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateMovieSubscription = {
  onUpdateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteMovieSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteMovieSubscription = {
  onDeleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    year?: number | null,
    numberOfSeasons?: number | null,
    plot?: string | null,
    cast?: string | null,
    creator?: string | null,
    categoryID: string,
    seasons?:  {
      __typename: "ModelSeasonConnection",
      items:  Array< {
        __typename: "Season",
        id: string,
        name: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        movieSeasonsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryMoviesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateSeasonSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSeasonSubscription = {
  onCreateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSeasonSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSeasonSubscription = {
  onUpdateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSeasonSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSeasonSubscription = {
  onDeleteSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    movieID: string,
    episodes?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot?: string | null,
        video: string,
        seasonID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        seasonEpisodesId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    movieSeasonsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateEpisodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEpisodeSubscription = {
  onCreateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEpisodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEpisodeSubscription = {
  onUpdateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEpisodeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEpisodeSubscription = {
  onDeleteEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    poster: string,
    duration: string,
    plot?: string | null,
    video: string,
    seasonID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seasonEpisodesId?: string | null,
    owner?: string | null,
  } | null,
};
