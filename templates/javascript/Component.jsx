/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
<% if (stylesLanguage === 'css') { %>require('../../styles/<%= classedName %>.css');<% } %>
<% if (stylesLanguage === 'sass') { %>require('../../styles/<%= classedName %>.sass');<% } %>
<% if (stylesLanguage === 'less') { %>require('../../styles/<%= classedName %>.less');<% } %>
<% if (stylesLanguage === 'stylus') { %>require('../../styles/<%= classedName %>.styl');<% } %>

var <%= classedName %> = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for <%= classedName %></p>
        </div>
      );
  }
});

module.exports = <%= classedName %>;
