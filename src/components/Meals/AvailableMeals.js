import React, { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from '../Meals/MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoadingMeals, setIsLoadingMeals] = useState(true);

  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-app-f1dc5-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoadingMeals(false);
    };

    fetchMeals().catch((error) => {
      setIsLoadingMeals(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoadingMeals) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (httpError) {
    return <section className={classes.MealsError}>{httpError}</section>;
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList} </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
