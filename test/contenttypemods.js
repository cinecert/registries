const { registries } = require("..")
const chai = require('chai')
const should = chai.should();
const assert = chai.assert

describe("contenttypemods schema", () => {
  before(async () => { ({ contenttypemods: { validate } } = await registries() ) })

  it("valid", () => {
    assert.doesNotThrow(() => validate([
      {
        "code": "[VersionNumber]",
        "cplMetadata": {
          "metaType": "Element Value",
          "element": "VersionNumber",
          "value": "[xs:nonNegativeInteger of VersionNumber]",
          "scope": "http://www.smpte-ra.org/schemas/429-16/2014/CPL-Metadata",
          "definingDoc": "SMPTE ST 429-16"
        },
        "description": "Indicates the version number of the Composition."
      },
      {
        "code": "3D",
        "cplMetadata": {
          "metaType": "Element Present",
          "element": "MainStereoscopicPicture",
          "scope": "http://www.smpte-ra.org/schemas/429-10/2008/Main-Stereo-Picture-CPL",
          "definingDoc": "SMPTE ST 429-10"
        },
        "description": "If the product is 3D."
      }
    ]))
  })

  it("invalid", () => {
    assert.throw(() => validate([
      "foo"
    ]), /fails schema/)
  })

})