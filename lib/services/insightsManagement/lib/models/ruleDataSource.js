/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RuleDataSource class.
 * @constructor
 * The resource from which the rule collects its data.
 *
 * @member {string} odata.type Polymorhpic Discriminator
 * 
 */
function RuleDataSource() {
}

/**
 * Defines the metadata of RuleDataSource
 *
 * @returns {object} metadata of RuleDataSource
 *
 */
RuleDataSource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RuleDataSource',
    type: {
      name: 'Composite',
      polymorphicDiscriminator: 'odata.type',
      uberParent: 'RuleDataSource',
      className: 'RuleDataSource',
      modelProperties: {
        odataType: {
          required: true,
          serializedName: 'odata.type',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = RuleDataSource;