import React from 'react';
import Header from '../components/Header';
//import NavLink from './NavLink';

var About = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <section className="c-page">
          <article className="c-content">
            <h1>About Stack</h1>
            <p>Stack is een application gemaakt om productiviteit te bevorderen. Het is eenvoudig om een lijst te maken van de taken. Op deze manier blijf je op de hoogte van de werkzaamheden die nog niet gedaan zijn.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

            <h2>Move work forward</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

            <h3>Get results</h3>
            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>

            <h3>Progress</h3>
            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>

            <h3>Motivation</h3>
            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
          </article>
        </section>
      </div>
    )
  }
});

module.exports = About;
