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
 * Initializes a new instance of the ComputePolicy class.
 * @constructor
 * The parameters used to create a new compute policy.
 *
 * @member {string} [name] The name of the compute policy
 *
 * @member {uuid} [objectId] The AAD object identifier for the entity to create
 * a policy for.
 *
 * @member {string} [objectType] The type of AAD object the object identifier
 * refers to. Possible values include: 'User', 'Group', 'ServicePrincipal'
 *
 * @member {number} [maxDegreeOfParallelismPerJob] The maximum degree of
 * parallelism per job this user can use to submit jobs.
 *
 * @member {number} [minPriorityPerJob] The minimum priority per job this user
 * can use to submit jobs.
 *
 */
class ComputePolicy {
  constructor() {
  }

  /**
   * Defines the metadata of ComputePolicy
   *
   * @returns {object} metadata of ComputePolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComputePolicy',
      type: {
        name: 'Composite',
        className: 'ComputePolicy',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          objectId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.objectId',
            type: {
              name: 'String'
            }
          },
          objectType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.objectType',
            type: {
              name: 'String'
            }
          },
          maxDegreeOfParallelismPerJob: {
            required: false,
            serializedName: 'properties.maxDegreeOfParallelismPerJob',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          minPriorityPerJob: {
            required: false,
            serializedName: 'properties.minPriorityPerJob',
            constraints: {
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ComputePolicy;
