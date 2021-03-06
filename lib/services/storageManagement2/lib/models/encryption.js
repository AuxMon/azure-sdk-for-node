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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the Encryption class.
 * @constructor
 * The encryption settings on the storage account.
 *
 * @member {object} [services] List of services which support encryption.
 *
 * @member {object} [services.blob] The encryption function of the blob storage
 * service.
 *
 * @member {boolean} [services.blob.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.blob.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.file] The encryption function of the file storage
 * service.
 *
 * @member {boolean} [services.file.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.file.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.table] The encryption function of the table
 * storage service.
 *
 * @member {boolean} [services.table.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.table.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.queue] The encryption function of the queue
 * storage service.
 *
 * @member {boolean} [services.queue.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.queue.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {string} keySource The encryption keySource (provider). Possible
 * values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault. Possible
 * values include: 'Microsoft.Storage', 'Microsoft.Keyvault'. Default value:
 * 'Microsoft.Storage' .
 *
 * @member {object} [keyVaultProperties] Properties provided by key vault.
 *
 * @member {string} [keyVaultProperties.keyName] The name of KeyVault key.
 *
 * @member {string} [keyVaultProperties.keyVersion] The version of KeyVault
 * key.
 *
 * @member {string} [keyVaultProperties.keyVaultUri] The Uri of KeyVault.
 *
 */
class Encryption {
  constructor() {
  }

  /**
   * Defines the metadata of Encryption
   *
   * @returns {object} metadata of Encryption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Encryption',
      type: {
        name: 'Composite',
        className: 'Encryption',
        modelProperties: {
          services: {
            required: false,
            serializedName: 'services',
            type: {
              name: 'Composite',
              className: 'EncryptionServices'
            }
          },
          keySource: {
            required: true,
            serializedName: 'keySource',
            defaultValue: 'Microsoft.Storage',
            type: {
              name: 'String'
            }
          },
          keyVaultProperties: {
            required: false,
            serializedName: 'keyvaultproperties',
            type: {
              name: 'Composite',
              className: 'KeyVaultProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = Encryption;
