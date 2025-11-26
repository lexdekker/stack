import React from 'react';
import Banner from '../components/Banner';

const About = () => {
  return (
    <div>
      <section className="c-page">
        <Banner />
        <article className="c-content">
          <h1 className="e-title">About Stack</h1>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim.
          </p>

          <h2>Move work forward</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
            massa quis enim.
          </p>

          <h3>Get results</h3>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem.
          </p>

          <h3>Progress</h3>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem.
          </p>

          <h3>Motivation</h3>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
            id, lorem.
          </p>

          <p>
            Check this project on{' '}
            <a href="https://github.com/lexdekker/stack" target="_blank" rel="noreferrer">
              Github
            </a>
            .
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
