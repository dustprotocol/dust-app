export const metadataReef20DeployWithMint = {
  data: {
    bytecode: {
      generatedSources: [
        {
          ast: {
            nodeType: "YulBlock",
            src: "0:5790:6",
            statements: [
              {
                body: {
                  nodeType: "YulBlock",
                  src: "102:259:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "112:75:6",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "179:6:6"
                              }
                            ],
                            functionName: {
                              name: "array_allocation_size_t_string_memory_ptr",
                              nodeType: "YulIdentifier",
                              src: "137:41:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "137:49:6"
                          }
                        ],
                        functionName: {
                          name: "allocate_memory",
                          nodeType: "YulIdentifier",
                          src: "121:15:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "121:66:6"
                      },
                      variableNames: [
                        {
                          name: "array",
                          nodeType: "YulIdentifier",
                          src: "112:5:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "array",
                            nodeType: "YulIdentifier",
                            src: "203:5:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "210:6:6"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "196:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "196:21:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "196:21:6"
                    },
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "226:27:6",
                      value: {
                        arguments: [
                          {
                            name: "array",
                            nodeType: "YulIdentifier",
                            src: "241:5:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "248:4:6",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "237:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "237:16:6"
                      },
                      variables: [
                        {
                          name: "dst",
                          nodeType: "YulTypedName",
                          src: "230:3:6",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "291:16:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "300:1:6",
                                  type: "",
                                  value: "0"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "303:1:6",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "293:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "293:12:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "293:12:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "src",
                                nodeType: "YulIdentifier",
                                src: "272:3:6"
                              },
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "277:6:6"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "268:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "268:16:6"
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "286:3:6"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "265:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "265:25:6"
                      },
                      nodeType: "YulIf",
                      src: "262:2:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "338:3:6"
                          },
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "343:3:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "348:6:6"
                          }
                        ],
                        functionName: {
                          name: "copy_memory_to_memory",
                          nodeType: "YulIdentifier",
                          src: "316:21:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "316:39:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "316:39:6"
                    }
                  ]
                },
                name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "src",
                    nodeType: "YulTypedName",
                    src: "75:3:6",
                    type: ""
                  },
                  {
                    name: "length",
                    nodeType: "YulTypedName",
                    src: "80:6:6",
                    type: ""
                  },
                  {
                    name: "end",
                    nodeType: "YulTypedName",
                    src: "88:3:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "array",
                    nodeType: "YulTypedName",
                    src: "96:5:6",
                    type: ""
                  }
                ],
                src: "7:354:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "454:215:6",
                  statements: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "503:16:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "512:1:6",
                                  type: "",
                                  value: "0"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "515:1:6",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "505:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "505:12:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "505:12:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "offset",
                                    nodeType: "YulIdentifier",
                                    src: "482:6:6"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "490:4:6",
                                    type: "",
                                    value: "0x1f"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "478:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "478:17:6"
                              },
                              {
                                name: "end",
                                nodeType: "YulIdentifier",
                                src: "497:3:6"
                              }
                            ],
                            functionName: {
                              name: "slt",
                              nodeType: "YulIdentifier",
                              src: "474:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "474:27:6"
                          }
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "467:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "467:35:6"
                      },
                      nodeType: "YulIf",
                      src: "464:2:6"
                    },
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "528:27:6",
                      value: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "548:6:6"
                          }
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "542:5:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "542:13:6"
                      },
                      variables: [
                        {
                          name: "length",
                          nodeType: "YulTypedName",
                          src: "532:6:6",
                          type: ""
                        }
                      ]
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "564:99:6",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "636:6:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "644:4:6",
                                type: "",
                                value: "0x20"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "632:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "632:17:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "651:6:6"
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "659:3:6"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                          nodeType: "YulIdentifier",
                          src: "573:58:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "573:90:6"
                      },
                      variableNames: [
                        {
                          name: "array",
                          nodeType: "YulIdentifier",
                          src: "564:5:6"
                        }
                      ]
                    }
                  ]
                },
                name: "abi_decode_t_string_memory_ptr_fromMemory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "offset",
                    nodeType: "YulTypedName",
                    src: "432:6:6",
                    type: ""
                  },
                  {
                    name: "end",
                    nodeType: "YulTypedName",
                    src: "440:3:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "array",
                    nodeType: "YulTypedName",
                    src: "448:5:6",
                    type: ""
                  }
                ],
                src: "381:288:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "738:80:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "748:22:6",
                      value: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "763:6:6"
                          }
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "757:5:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "757:13:6"
                      },
                      variableNames: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "748:5:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "806:5:6"
                          }
                        ],
                        functionName: {
                          name: "validator_revert_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "779:26:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "779:33:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "779:33:6"
                    }
                  ]
                },
                name: "abi_decode_t_uint256_fromMemory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "offset",
                    nodeType: "YulTypedName",
                    src: "716:6:6",
                    type: ""
                  },
                  {
                    name: "end",
                    nodeType: "YulTypedName",
                    src: "724:3:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "value",
                    nodeType: "YulTypedName",
                    src: "732:5:6",
                    type: ""
                  }
                ],
                src: "675:143:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "955:677:6",
                  statements: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "1001:16:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1010:1:6",
                                  type: "",
                                  value: "0"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1013:1:6",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "1003:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1003:12:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "1003:12:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "dataEnd",
                                nodeType: "YulIdentifier",
                                src: "976:7:6"
                              },
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "985:9:6"
                              }
                            ],
                            functionName: {
                              name: "sub",
                              nodeType: "YulIdentifier",
                              src: "972:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "972:23:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "997:2:6",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "968:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "968:32:6"
                      },
                      nodeType: "YulIf",
                      src: "965:2:6"
                    },
                    {
                      nodeType: "YulBlock",
                      src: "1027:224:6",
                      statements: [
                        {
                          nodeType: "YulVariableDeclaration",
                          src: "1042:38:6",
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nodeType: "YulIdentifier",
                                    src: "1066:9:6"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1077:1:6",
                                    type: "",
                                    value: "0"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "1062:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1062:17:6"
                              }
                            ],
                            functionName: {
                              name: "mload",
                              nodeType: "YulIdentifier",
                              src: "1056:5:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1056:24:6"
                          },
                          variables: [
                            {
                              name: "offset",
                              nodeType: "YulTypedName",
                              src: "1046:6:6",
                              type: ""
                            }
                          ]
                        },
                        {
                          body: {
                            nodeType: "YulBlock",
                            src: "1127:16:6",
                            statements: [
                              {
                                expression: {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "1136:1:6",
                                      type: "",
                                      value: "0"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "1139:1:6",
                                      type: "",
                                      value: "0"
                                    }
                                  ],
                                  functionName: {
                                    name: "revert",
                                    nodeType: "YulIdentifier",
                                    src: "1129:6:6"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "1129:12:6"
                                },
                                nodeType: "YulExpressionStatement",
                                src: "1129:12:6"
                              }
                            ]
                          },
                          condition: {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1099:6:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1107:18:6",
                                type: "",
                                value: "0xffffffffffffffff"
                              }
                            ],
                            functionName: {
                              name: "gt",
                              nodeType: "YulIdentifier",
                              src: "1096:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1096:30:6"
                          },
                          nodeType: "YulIf",
                          src: "1093:2:6"
                        },
                        {
                          nodeType: "YulAssignment",
                          src: "1157:84:6",
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nodeType: "YulIdentifier",
                                    src: "1213:9:6"
                                  },
                                  {
                                    name: "offset",
                                    nodeType: "YulIdentifier",
                                    src: "1224:6:6"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "1209:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1209:22:6"
                              },
                              {
                                name: "dataEnd",
                                nodeType: "YulIdentifier",
                                src: "1233:7:6"
                              }
                            ],
                            functionName: {
                              name: "abi_decode_t_string_memory_ptr_fromMemory",
                              nodeType: "YulIdentifier",
                              src: "1167:41:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1167:74:6"
                          },
                          variableNames: [
                            {
                              name: "value0",
                              nodeType: "YulIdentifier",
                              src: "1157:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      nodeType: "YulBlock",
                      src: "1261:225:6",
                      statements: [
                        {
                          nodeType: "YulVariableDeclaration",
                          src: "1276:39:6",
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nodeType: "YulIdentifier",
                                    src: "1300:9:6"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1311:2:6",
                                    type: "",
                                    value: "32"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "1296:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1296:18:6"
                              }
                            ],
                            functionName: {
                              name: "mload",
                              nodeType: "YulIdentifier",
                              src: "1290:5:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1290:25:6"
                          },
                          variables: [
                            {
                              name: "offset",
                              nodeType: "YulTypedName",
                              src: "1280:6:6",
                              type: ""
                            }
                          ]
                        },
                        {
                          body: {
                            nodeType: "YulBlock",
                            src: "1362:16:6",
                            statements: [
                              {
                                expression: {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "1371:1:6",
                                      type: "",
                                      value: "0"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "1374:1:6",
                                      type: "",
                                      value: "0"
                                    }
                                  ],
                                  functionName: {
                                    name: "revert",
                                    nodeType: "YulIdentifier",
                                    src: "1364:6:6"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "1364:12:6"
                                },
                                nodeType: "YulExpressionStatement",
                                src: "1364:12:6"
                              }
                            ]
                          },
                          condition: {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "1334:6:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1342:18:6",
                                type: "",
                                value: "0xffffffffffffffff"
                              }
                            ],
                            functionName: {
                              name: "gt",
                              nodeType: "YulIdentifier",
                              src: "1331:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1331:30:6"
                          },
                          nodeType: "YulIf",
                          src: "1328:2:6"
                        },
                        {
                          nodeType: "YulAssignment",
                          src: "1392:84:6",
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nodeType: "YulIdentifier",
                                    src: "1448:9:6"
                                  },
                                  {
                                    name: "offset",
                                    nodeType: "YulIdentifier",
                                    src: "1459:6:6"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "1444:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1444:22:6"
                              },
                              {
                                name: "dataEnd",
                                nodeType: "YulIdentifier",
                                src: "1468:7:6"
                              }
                            ],
                            functionName: {
                              name: "abi_decode_t_string_memory_ptr_fromMemory",
                              nodeType: "YulIdentifier",
                              src: "1402:41:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1402:74:6"
                          },
                          variableNames: [
                            {
                              name: "value1",
                              nodeType: "YulIdentifier",
                              src: "1392:6:6"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      nodeType: "YulBlock",
                      src: "1496:129:6",
                      statements: [
                        {
                          nodeType: "YulVariableDeclaration",
                          src: "1511:16:6",
                          value: {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1525:2:6",
                            type: "",
                            value: "64"
                          },
                          variables: [
                            {
                              name: "offset",
                              nodeType: "YulTypedName",
                              src: "1515:6:6",
                              type: ""
                            }
                          ]
                        },
                        {
                          nodeType: "YulAssignment",
                          src: "1541:74:6",
                          value: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nodeType: "YulIdentifier",
                                    src: "1587:9:6"
                                  },
                                  {
                                    name: "offset",
                                    nodeType: "YulIdentifier",
                                    src: "1598:6:6"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "1583:3:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1583:22:6"
                              },
                              {
                                name: "dataEnd",
                                nodeType: "YulIdentifier",
                                src: "1607:7:6"
                              }
                            ],
                            functionName: {
                              name: "abi_decode_t_uint256_fromMemory",
                              nodeType: "YulIdentifier",
                              src: "1551:31:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1551:64:6"
                          },
                          variableNames: [
                            {
                              name: "value2",
                              nodeType: "YulIdentifier",
                              src: "1541:6:6"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                name: "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256_fromMemory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "headStart",
                    nodeType: "YulTypedName",
                    src: "909:9:6",
                    type: ""
                  },
                  {
                    name: "dataEnd",
                    nodeType: "YulTypedName",
                    src: "920:7:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "value0",
                    nodeType: "YulTypedName",
                    src: "932:6:6",
                    type: ""
                  },
                  {
                    name: "value1",
                    nodeType: "YulTypedName",
                    src: "940:6:6",
                    type: ""
                  },
                  {
                    name: "value2",
                    nodeType: "YulTypedName",
                    src: "948:6:6",
                    type: ""
                  }
                ],
                src: "824:808:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "1784:220:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "1794:74:6",
                      value: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "1860:3:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1865:2:6",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                          nodeType: "YulIdentifier",
                          src: "1801:58:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1801:67:6"
                      },
                      variableNames: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1794:3:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "1966:3:6"
                          }
                        ],
                        functionName: {
                          name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                          nodeType: "YulIdentifier",
                          src: "1877:88:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1877:93:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "1877:93:6"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "1979:19:6",
                      value: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "1990:3:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1995:2:6",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1986:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1986:12:6"
                      },
                      variableNames: [
                        {
                          name: "end",
                          nodeType: "YulIdentifier",
                          src: "1979:3:6"
                        }
                      ]
                    }
                  ]
                },
                name: "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "pos",
                    nodeType: "YulTypedName",
                    src: "1772:3:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "end",
                    nodeType: "YulTypedName",
                    src: "1780:3:6",
                    type: ""
                  }
                ],
                src: "1638:366:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "2075:53:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "2092:3:6"
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2115:5:6"
                              }
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2097:17:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2097:24:6"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "2085:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2085:37:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "2085:37:6"
                    }
                  ]
                },
                name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "value",
                    nodeType: "YulTypedName",
                    src: "2063:5:6",
                    type: ""
                  },
                  {
                    name: "pos",
                    nodeType: "YulTypedName",
                    src: "2070:3:6",
                    type: ""
                  }
                ],
                src: "2010:118:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "2305:248:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "2315:26:6",
                      value: {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2327:9:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2338:2:6",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2323:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2323:18:6"
                      },
                      variableNames: [
                        {
                          name: "tail",
                          nodeType: "YulIdentifier",
                          src: "2315:4:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2362:9:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2373:1:6",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2358:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2358:17:6"
                          },
                          {
                            arguments: [
                              {
                                name: "tail",
                                nodeType: "YulIdentifier",
                                src: "2381:4:6"
                              },
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2387:9:6"
                              }
                            ],
                            functionName: {
                              name: "sub",
                              nodeType: "YulIdentifier",
                              src: "2377:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2377:20:6"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "2351:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2351:47:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "2351:47:6"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2407:139:6",
                      value: {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "2541:4:6"
                          }
                        ],
                        functionName: {
                          name: "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                          nodeType: "YulIdentifier",
                          src: "2415:124:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2415:131:6"
                      },
                      variableNames: [
                        {
                          name: "tail",
                          nodeType: "YulIdentifier",
                          src: "2407:4:6"
                        }
                      ]
                    }
                  ]
                },
                name: "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "headStart",
                    nodeType: "YulTypedName",
                    src: "2285:9:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "tail",
                    nodeType: "YulTypedName",
                    src: "2300:4:6",
                    type: ""
                  }
                ],
                src: "2134:419:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "2657:124:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "2667:26:6",
                      value: {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2679:9:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2690:2:6",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2675:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2675:18:6"
                      },
                      variableNames: [
                        {
                          name: "tail",
                          nodeType: "YulIdentifier",
                          src: "2667:4:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "2747:6:6"
                          },
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2760:9:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2771:1:6",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2756:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2756:17:6"
                          }
                        ],
                        functionName: {
                          name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                          nodeType: "YulIdentifier",
                          src: "2703:43:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2703:71:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "2703:71:6"
                    }
                  ]
                },
                name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "headStart",
                    nodeType: "YulTypedName",
                    src: "2629:9:6",
                    type: ""
                  },
                  {
                    name: "value0",
                    nodeType: "YulTypedName",
                    src: "2641:6:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "tail",
                    nodeType: "YulTypedName",
                    src: "2652:4:6",
                    type: ""
                  }
                ],
                src: "2559:222:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "2828:88:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "2838:30:6",
                      value: {
                        arguments: [],
                        functionName: {
                          name: "allocate_unbounded",
                          nodeType: "YulIdentifier",
                          src: "2848:18:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2848:20:6"
                      },
                      variableNames: [
                        {
                          name: "memPtr",
                          nodeType: "YulIdentifier",
                          src: "2838:6:6"
                        }
                      ]
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "2897:6:6"
                          },
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "2905:4:6"
                          }
                        ],
                        functionName: {
                          name: "finalize_allocation",
                          nodeType: "YulIdentifier",
                          src: "2877:19:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2877:33:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "2877:33:6"
                    }
                  ]
                },
                name: "allocate_memory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "size",
                    nodeType: "YulTypedName",
                    src: "2812:4:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "memPtr",
                    nodeType: "YulTypedName",
                    src: "2821:6:6",
                    type: ""
                  }
                ],
                src: "2787:129:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "2962:35:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "2972:19:6",
                      value: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2988:2:6",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "mload",
                          nodeType: "YulIdentifier",
                          src: "2982:5:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2982:9:6"
                      },
                      variableNames: [
                        {
                          name: "memPtr",
                          nodeType: "YulIdentifier",
                          src: "2972:6:6"
                        }
                      ]
                    }
                  ]
                },
                name: "allocate_unbounded",
                nodeType: "YulFunctionDefinition",
                returnVariables: [
                  {
                    name: "memPtr",
                    nodeType: "YulTypedName",
                    src: "2955:6:6",
                    type: ""
                  }
                ],
                src: "2922:75:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "3070:241:6",
                  statements: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3175:22:6",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "panic_error_0x41",
                                nodeType: "YulIdentifier",
                                src: "3177:16:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3177:18:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "3177:18:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3147:6:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3155:18:6",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3144:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3144:30:6"
                      },
                      nodeType: "YulIf",
                      src: "3141:2:6"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3207:37:6",
                      value: {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3237:6:6"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "3215:21:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3215:29:6"
                      },
                      variableNames: [
                        {
                          name: "size",
                          nodeType: "YulIdentifier",
                          src: "3207:4:6"
                        }
                      ]
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3281:23:6",
                      value: {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "3293:4:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3299:4:6",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3289:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3289:15:6"
                      },
                      variableNames: [
                        {
                          name: "size",
                          nodeType: "YulIdentifier",
                          src: "3281:4:6"
                        }
                      ]
                    }
                  ]
                },
                name: "array_allocation_size_t_string_memory_ptr",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "length",
                    nodeType: "YulTypedName",
                    src: "3054:6:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "size",
                    nodeType: "YulTypedName",
                    src: "3065:4:6",
                    type: ""
                  }
                ],
                src: "3003:308:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "3413:73:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "3430:3:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3435:6:6"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "3423:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3423:19:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "3423:19:6"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3451:29:6",
                      value: {
                        arguments: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "3470:3:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3475:4:6",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3466:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3466:14:6"
                      },
                      variableNames: [
                        {
                          name: "updated_pos",
                          nodeType: "YulIdentifier",
                          src: "3451:11:6"
                        }
                      ]
                    }
                  ]
                },
                name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "pos",
                    nodeType: "YulTypedName",
                    src: "3385:3:6",
                    type: ""
                  },
                  {
                    name: "length",
                    nodeType: "YulTypedName",
                    src: "3390:6:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "updated_pos",
                    nodeType: "YulTypedName",
                    src: "3401:11:6",
                    type: ""
                  }
                ],
                src: "3317:169:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "3536:261:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "3546:25:6",
                      value: {
                        arguments: [
                          {
                            name: "x",
                            nodeType: "YulIdentifier",
                            src: "3569:1:6"
                          }
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "3551:17:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3551:20:6"
                      },
                      variableNames: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "3546:1:6"
                        }
                      ]
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3580:25:6",
                      value: {
                        arguments: [
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "3603:1:6"
                          }
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "3585:17:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3585:20:6"
                      },
                      variableNames: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "3580:1:6"
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3743:22:6",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "panic_error_0x11",
                                nodeType: "YulIdentifier",
                                src: "3745:16:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3745:18:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "3745:18:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "x",
                            nodeType: "YulIdentifier",
                            src: "3664:1:6"
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3671:66:6",
                                type: "",
                                value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                              },
                              {
                                name: "y",
                                nodeType: "YulIdentifier",
                                src: "3739:1:6"
                              }
                            ],
                            functionName: {
                              name: "sub",
                              nodeType: "YulIdentifier",
                              src: "3667:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3667:74:6"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3661:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3661:81:6"
                      },
                      nodeType: "YulIf",
                      src: "3658:2:6"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3775:16:6",
                      value: {
                        arguments: [
                          {
                            name: "x",
                            nodeType: "YulIdentifier",
                            src: "3786:1:6"
                          },
                          {
                            name: "y",
                            nodeType: "YulIdentifier",
                            src: "3789:1:6"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "3782:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3782:9:6"
                      },
                      variableNames: [
                        {
                          name: "sum",
                          nodeType: "YulIdentifier",
                          src: "3775:3:6"
                        }
                      ]
                    }
                  ]
                },
                name: "checked_add_t_uint256",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "x",
                    nodeType: "YulTypedName",
                    src: "3523:1:6",
                    type: ""
                  },
                  {
                    name: "y",
                    nodeType: "YulTypedName",
                    src: "3526:1:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "sum",
                    nodeType: "YulTypedName",
                    src: "3532:3:6",
                    type: ""
                  }
                ],
                src: "3492:305:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "3848:32:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "3858:16:6",
                      value: {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3869:5:6"
                      },
                      variableNames: [
                        {
                          name: "cleaned",
                          nodeType: "YulIdentifier",
                          src: "3858:7:6"
                        }
                      ]
                    }
                  ]
                },
                name: "cleanup_t_uint256",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "value",
                    nodeType: "YulTypedName",
                    src: "3830:5:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "cleaned",
                    nodeType: "YulTypedName",
                    src: "3840:7:6",
                    type: ""
                  }
                ],
                src: "3803:77:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "3935:258:6",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3945:10:6",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3954:1:6",
                        type: "",
                        value: "0"
                      },
                      variables: [
                        {
                          name: "i",
                          nodeType: "YulTypedName",
                          src: "3949:1:6",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4014:63:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "dst",
                                      nodeType: "YulIdentifier",
                                      src: "4039:3:6"
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "4044:1:6"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4035:3:6"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4035:11:6"
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "src",
                                          nodeType: "YulIdentifier",
                                          src: "4058:3:6"
                                        },
                                        {
                                          name: "i",
                                          nodeType: "YulIdentifier",
                                          src: "4063:1:6"
                                        }
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "4054:3:6"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4054:11:6"
                                    }
                                  ],
                                  functionName: {
                                    name: "mload",
                                    nodeType: "YulIdentifier",
                                    src: "4048:5:6"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4048:18:6"
                                }
                              ],
                              functionName: {
                                name: "mstore",
                                nodeType: "YulIdentifier",
                                src: "4028:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4028:39:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4028:39:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "3975:1:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "3978:6:6"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "3972:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3972:13:6"
                      },
                      nodeType: "YulForLoop",
                      post: {
                        nodeType: "YulBlock",
                        src: "3986:19:6",
                        statements: [
                          {
                            nodeType: "YulAssignment",
                            src: "3988:15:6",
                            value: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "3997:1:6"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4000:2:6",
                                  type: "",
                                  value: "32"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3993:3:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3993:10:6"
                            },
                            variableNames: [
                              {
                                name: "i",
                                nodeType: "YulIdentifier",
                                src: "3988:1:6"
                              }
                            ]
                          }
                        ]
                      },
                      pre: {
                        nodeType: "YulBlock",
                        src: "3968:3:6",
                        statements: []
                      },
                      src: "3964:113:6"
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4111:76:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "dst",
                                      nodeType: "YulIdentifier",
                                      src: "4161:3:6"
                                    },
                                    {
                                      name: "length",
                                      nodeType: "YulIdentifier",
                                      src: "4166:6:6"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4157:3:6"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4157:16:6"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4175:1:6",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "mstore",
                                nodeType: "YulIdentifier",
                                src: "4150:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4150:27:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4150:27:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "4092:1:6"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4095:6:6"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "4089:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4089:13:6"
                      },
                      nodeType: "YulIf",
                      src: "4086:2:6"
                    }
                  ]
                },
                name: "copy_memory_to_memory",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "src",
                    nodeType: "YulTypedName",
                    src: "3917:3:6",
                    type: ""
                  },
                  {
                    name: "dst",
                    nodeType: "YulTypedName",
                    src: "3922:3:6",
                    type: ""
                  },
                  {
                    name: "length",
                    nodeType: "YulTypedName",
                    src: "3927:6:6",
                    type: ""
                  }
                ],
                src: "3886:307:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "4250:269:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "4260:22:6",
                      value: {
                        arguments: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "4274:4:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4280:1:6",
                            type: "",
                            value: "2"
                          }
                        ],
                        functionName: {
                          name: "div",
                          nodeType: "YulIdentifier",
                          src: "4270:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4270:12:6"
                      },
                      variableNames: [
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "4260:6:6"
                        }
                      ]
                    },
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4291:38:6",
                      value: {
                        arguments: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "4321:4:6"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4327:1:6",
                            type: "",
                            value: "1"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "4317:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4317:12:6"
                      },
                      variables: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulTypedName",
                          src: "4295:18:6",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4368:51:6",
                        statements: [
                          {
                            nodeType: "YulAssignment",
                            src: "4382:27:6",
                            value: {
                              arguments: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "4396:6:6"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "4404:4:6",
                                  type: "",
                                  value: "0x7f"
                                }
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "4392:3:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4392:17:6"
                            },
                            variableNames: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "4382:6:6"
                              }
                            ]
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "outOfPlaceEncoding",
                            nodeType: "YulIdentifier",
                            src: "4348:18:6"
                          }
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "4341:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4341:26:6"
                      },
                      nodeType: "YulIf",
                      src: "4338:2:6"
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4471:42:6",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "panic_error_0x22",
                                nodeType: "YulIdentifier",
                                src: "4485:16:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4485:18:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4485:18:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "outOfPlaceEncoding",
                            nodeType: "YulIdentifier",
                            src: "4435:18:6"
                          },
                          {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "4458:6:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4466:2:6",
                                type: "",
                                value: "32"
                              }
                            ],
                            functionName: {
                              name: "lt",
                              nodeType: "YulIdentifier",
                              src: "4455:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4455:14:6"
                          }
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "4432:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4432:38:6"
                      },
                      nodeType: "YulIf",
                      src: "4429:2:6"
                    }
                  ]
                },
                name: "extract_byte_array_length",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "data",
                    nodeType: "YulTypedName",
                    src: "4234:4:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "length",
                    nodeType: "YulTypedName",
                    src: "4243:6:6",
                    type: ""
                  }
                ],
                src: "4199:320:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "4568:238:6",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4578:58:6",
                      value: {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "4600:6:6"
                          },
                          {
                            arguments: [
                              {
                                name: "size",
                                nodeType: "YulIdentifier",
                                src: "4630:4:6"
                              }
                            ],
                            functionName: {
                              name: "round_up_to_mul_of_32",
                              nodeType: "YulIdentifier",
                              src: "4608:21:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4608:27:6"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4596:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4596:40:6"
                      },
                      variables: [
                        {
                          name: "newFreePtr",
                          nodeType: "YulTypedName",
                          src: "4582:10:6",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4747:22:6",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "panic_error_0x41",
                                nodeType: "YulIdentifier",
                                src: "4749:16:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4749:18:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4749:18:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "newFreePtr",
                                nodeType: "YulIdentifier",
                                src: "4690:10:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4702:18:6",
                                type: "",
                                value: "0xffffffffffffffff"
                              }
                            ],
                            functionName: {
                              name: "gt",
                              nodeType: "YulIdentifier",
                              src: "4687:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4687:34:6"
                          },
                          {
                            arguments: [
                              {
                                name: "newFreePtr",
                                nodeType: "YulIdentifier",
                                src: "4726:10:6"
                              },
                              {
                                name: "memPtr",
                                nodeType: "YulIdentifier",
                                src: "4738:6:6"
                              }
                            ],
                            functionName: {
                              name: "lt",
                              nodeType: "YulIdentifier",
                              src: "4723:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4723:22:6"
                          }
                        ],
                        functionName: {
                          name: "or",
                          nodeType: "YulIdentifier",
                          src: "4684:2:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4684:62:6"
                      },
                      nodeType: "YulIf",
                      src: "4681:2:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4785:2:6",
                            type: "",
                            value: "64"
                          },
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "4789:10:6"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "4778:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4778:22:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "4778:22:6"
                    }
                  ]
                },
                name: "finalize_allocation",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "memPtr",
                    nodeType: "YulTypedName",
                    src: "4554:6:6",
                    type: ""
                  },
                  {
                    name: "size",
                    nodeType: "YulTypedName",
                    src: "4562:4:6",
                    type: ""
                  }
                ],
                src: "4525:281:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "4840:152:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4857:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4860:77:6",
                            type: "",
                            value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "4850:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4850:88:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "4850:88:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4954:1:6",
                            type: "",
                            value: "4"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4957:4:6",
                            type: "",
                            value: "0x11"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "4947:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4947:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "4947:15:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4978:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4981:4:6",
                            type: "",
                            value: "0x24"
                          }
                        ],
                        functionName: {
                          name: "revert",
                          nodeType: "YulIdentifier",
                          src: "4971:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4971:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "4971:15:6"
                    }
                  ]
                },
                name: "panic_error_0x11",
                nodeType: "YulFunctionDefinition",
                src: "4812:180:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "5026:152:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5043:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5046:77:6",
                            type: "",
                            value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "5036:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5036:88:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5036:88:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5140:1:6",
                            type: "",
                            value: "4"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5143:4:6",
                            type: "",
                            value: "0x22"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "5133:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5133:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5133:15:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5164:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5167:4:6",
                            type: "",
                            value: "0x24"
                          }
                        ],
                        functionName: {
                          name: "revert",
                          nodeType: "YulIdentifier",
                          src: "5157:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5157:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5157:15:6"
                    }
                  ]
                },
                name: "panic_error_0x22",
                nodeType: "YulFunctionDefinition",
                src: "4998:180:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "5212:152:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5229:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5232:77:6",
                            type: "",
                            value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "5222:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5222:88:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5222:88:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5326:1:6",
                            type: "",
                            value: "4"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5329:4:6",
                            type: "",
                            value: "0x41"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "5319:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5319:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5319:15:6"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5350:1:6",
                            type: "",
                            value: "0"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5353:4:6",
                            type: "",
                            value: "0x24"
                          }
                        ],
                        functionName: {
                          name: "revert",
                          nodeType: "YulIdentifier",
                          src: "5343:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5343:15:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5343:15:6"
                    }
                  ]
                },
                name: "panic_error_0x41",
                nodeType: "YulFunctionDefinition",
                src: "5184:180:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "5418:54:6",
                  statements: [
                    {
                      nodeType: "YulAssignment",
                      src: "5428:38:6",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5446:5:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5453:2:6",
                                type: "",
                                value: "31"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5442:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5442:14:6"
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5462:2:6",
                                type: "",
                                value: "31"
                              }
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "5458:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5458:7:6"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "5438:3:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5438:28:6"
                      },
                      variableNames: [
                        {
                          name: "result",
                          nodeType: "YulIdentifier",
                          src: "5428:6:6"
                        }
                      ]
                    }
                  ]
                },
                name: "round_up_to_mul_of_32",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "value",
                    nodeType: "YulTypedName",
                    src: "5401:5:6",
                    type: ""
                  }
                ],
                returnVariables: [
                  {
                    name: "result",
                    nodeType: "YulTypedName",
                    src: "5411:6:6",
                    type: ""
                  }
                ],
                src: "5370:102:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "5584:75:6",
                  statements: [
                    {
                      expression: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "memPtr",
                                nodeType: "YulIdentifier",
                                src: "5606:6:6"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5614:1:6",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5602:3:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5602:14:6"
                          },
                          {
                            kind: "string",
                            nodeType: "YulLiteral",
                            src: "5618:33:6",
                            type: "",
                            value: "ERC20: mint to the zero address"
                          }
                        ],
                        functionName: {
                          name: "mstore",
                          nodeType: "YulIdentifier",
                          src: "5595:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5595:57:6"
                      },
                      nodeType: "YulExpressionStatement",
                      src: "5595:57:6"
                    }
                  ]
                },
                name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "memPtr",
                    nodeType: "YulTypedName",
                    src: "5576:6:6",
                    type: ""
                  }
                ],
                src: "5478:181:6"
              },
              {
                body: {
                  nodeType: "YulBlock",
                  src: "5708:79:6",
                  statements: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "5765:16:6",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5774:1:6",
                                  type: "",
                                  value: "0"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5777:1:6",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "revert",
                                nodeType: "YulIdentifier",
                                src: "5767:6:6"
                              },
                              nodeType: "YulFunctionCall",
                              src: "5767:12:6"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "5767:12:6"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "5731:5:6"
                              },
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nodeType: "YulIdentifier",
                                    src: "5756:5:6"
                                  }
                                ],
                                functionName: {
                                  name: "cleanup_t_uint256",
                                  nodeType: "YulIdentifier",
                                  src: "5738:17:6"
                                },
                                nodeType: "YulFunctionCall",
                                src: "5738:24:6"
                              }
                            ],
                            functionName: {
                              name: "eq",
                              nodeType: "YulIdentifier",
                              src: "5728:2:6"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5728:35:6"
                          }
                        ],
                        functionName: {
                          name: "iszero",
                          nodeType: "YulIdentifier",
                          src: "5721:6:6"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5721:43:6"
                      },
                      nodeType: "YulIf",
                      src: "5718:2:6"
                    }
                  ]
                },
                name: "validator_revert_t_uint256",
                nodeType: "YulFunctionDefinition",
                parameters: [
                  {
                    name: "value",
                    nodeType: "YulTypedName",
                    src: "5701:5:6",
                    type: ""
                  }
                ],
                src: "5665:122:6"
              }
            ]
          },
          contents: "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
          id: 6,
          language: "Yul",
          name: "#utility.yul"
        }
      ],
      linkReferences: {},
      object: "60806040523480156200001157600080fd5b506040516200216e3803806200216e833981810160405281019062000037919062000432565b8282816003908051906020019062000051929190620002f9565b5080600490805190602001906200006a929190620002f9565b5050506200008d62000081620000a860201b60201c565b620000b060201b60201c565b6200009f33826200017660201b60201c565b5050506200078b565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001e9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001e090620004f2565b60405180910390fd5b620001fd60008383620002ef60201b60201c565b8060026000828254620002119190620005a1565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002689190620005a1565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002cf919062000514565b60405180910390a3620002eb60008383620002f460201b60201c565b5050565b505050565b505050565b82805462000307906200063e565b90600052602060002090601f0160209004810192826200032b576000855562000377565b82601f106200034657805160ff191683800117855562000377565b8280016001018555821562000377579182015b828111156200037657825182559160200191906001019062000359565b5b5090506200038691906200038a565b5090565b5b80821115620003a55760008160009055506001016200038b565b5090565b6000620003c0620003ba846200055a565b62000531565b905082815260208101848484011115620003d957600080fd5b620003e684828562000608565b509392505050565b600082601f8301126200040057600080fd5b815162000412848260208601620003a9565b91505092915050565b6000815190506200042c8162000771565b92915050565b6000806000606084860312156200044857600080fd5b600084015167ffffffffffffffff8111156200046357600080fd5b6200047186828701620003ee565b935050602084015167ffffffffffffffff8111156200048f57600080fd5b6200049d86828701620003ee565b9250506040620004b0868287016200041b565b9150509250925092565b6000620004c9601f8362000590565b9150620004d68262000748565b602082019050919050565b620004ec81620005fe565b82525050565b600060208201905081810360008301526200050d81620004ba565b9050919050565b60006020820190506200052b6000830184620004e1565b92915050565b60006200053d62000550565b90506200054b828262000674565b919050565b6000604051905090565b600067ffffffffffffffff82111562000578576200057762000708565b5b620005838262000737565b9050602081019050919050565b600082825260208201905092915050565b6000620005ae82620005fe565b9150620005bb83620005fe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005f357620005f2620006aa565b5b828201905092915050565b6000819050919050565b60005b83811015620006285780820151818401526020810190506200060b565b8381111562000638576000848401525b50505050565b600060028204905060018216806200065757607f821691505b602082108114156200066e576200066d620006d9565b5b50919050565b6200067f8262000737565b810181811067ffffffffffffffff82111715620006a157620006a062000708565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200077c81620005fe565b81146200078857600080fd5b50565b6119d3806200079b6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f9190611398565b60405180910390f35b610132600480360381019061012d9190611153565b6103b4565b60405161013f919061137d565b60405180910390f35b6101506103d7565b60405161015d91906114fa565b60405180910390f35b610180600480360381019061017b9190611104565b6103e1565b60405161018d919061137d565b60405180910390f35b61019e610410565b6040516101ab9190611515565b60405180910390f35b6101ce60048036038101906101c99190611153565b610419565b6040516101db919061137d565b60405180910390f35b6101fe60048036038101906101f99190611153565b6104c3565b005b61021a6004803603810190610215919061109f565b61054d565b60405161022791906114fa565b60405180910390f35b610238610595565b005b61024261061d565b60405161024f9190611362565b60405180910390f35b610260610647565b60405161026d9190611398565b60405180910390f35b610290600480360381019061028b9190611153565b6106d9565b60405161029d919061137d565b60405180910390f35b6102c060048036038101906102bb9190611153565b6107c3565b6040516102cd919061137d565b60405180910390f35b6102f060048036038101906102eb91906110c8565b6107e6565b6040516102fd91906114fa565b60405180910390f35b610320600480360381019061031b919061109f565b61086d565b005b6060600380546103319061162a565b80601f016020809104026020016040519081016040528092919081815260200182805461035d9061162a565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610965565b90506103cc81858561096d565b600191505092915050565b6000600254905090565b6000806103ec610965565b90506103f9858285610b38565b610404858585610bc4565b60019150509392505050565b60006012905090565b600080610424610965565b90506104b8818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104b3919061154c565b61096d565b600191505092915050565b6104cb610965565b73ffffffffffffffffffffffffffffffffffffffff166104e961061d565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105369061145a565b60405180910390fd5b6105498282610e45565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61059d610965565b73ffffffffffffffffffffffffffffffffffffffff166105bb61061d565b73ffffffffffffffffffffffffffffffffffffffff1614610611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106089061145a565b60405180910390fd5b61061b6000610fa5565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546106569061162a565b80601f01602080910402602001604051908101604052809291908181526020018280546106829061162a565b80156106cf5780601f106106a4576101008083540402835291602001916106cf565b820191906000526020600020905b8154815290600101906020018083116106b257829003601f168201915b5050505050905090565b6000806106e4610965565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156107aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a1906114ba565b60405180910390fd5b6107b7828686840361096d565b60019250505092915050565b6000806107ce610965565b90506107db818585610bc4565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610875610965565b73ffffffffffffffffffffffffffffffffffffffff1661089361061d565b73ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e09061145a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610959576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610950906113da565b60405180910390fd5b61096281610fa5565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d49061149a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a44906113fa565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b2b91906114fa565b60405180910390a3505050565b6000610b4484846107e6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bbe5781811015610bb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba79061141a565b60405180910390fd5b610bbd848484840361096d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b9061147a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ca4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9b906113ba565b60405180910390fd5b610caf83838361106b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2c9061143a565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610dc8919061154c565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e2c91906114fa565b60405180910390a3610e3f848484611070565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610eb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eac906114da565b60405180910390fd5b610ec16000838361106b565b8060026000828254610ed3919061154c565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f28919061154c565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f8d91906114fa565b60405180910390a3610fa160008383611070565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b6000813590506110848161196f565b92915050565b60008135905061109981611986565b92915050565b6000602082840312156110b157600080fd5b60006110bf84828501611075565b91505092915050565b600080604083850312156110db57600080fd5b60006110e985828601611075565b92505060206110fa85828601611075565b9150509250929050565b60008060006060848603121561111957600080fd5b600061112786828701611075565b935050602061113886828701611075565b92505060406111498682870161108a565b9150509250925092565b6000806040838503121561116657600080fd5b600061117485828601611075565b92505060206111858582860161108a565b9150509250929050565b611198816115a2565b82525050565b6111a7816115b4565b82525050565b60006111b882611530565b6111c2818561153b565b93506111d28185602086016115f7565b6111db816116ba565b840191505092915050565b60006111f360238361153b565b91506111fe826116cb565b604082019050919050565b600061121660268361153b565b91506112218261171a565b604082019050919050565b600061123960228361153b565b915061124482611769565b604082019050919050565b600061125c601d8361153b565b9150611267826117b8565b602082019050919050565b600061127f60268361153b565b915061128a826117e1565b604082019050919050565b60006112a260208361153b565b91506112ad82611830565b602082019050919050565b60006112c560258361153b565b91506112d082611859565b604082019050919050565b60006112e860248361153b565b91506112f3826118a8565b604082019050919050565b600061130b60258361153b565b9150611316826118f7565b604082019050919050565b600061132e601f8361153b565b915061133982611946565b602082019050919050565b61134d816115e0565b82525050565b61135c816115ea565b82525050565b6000602082019050611377600083018461118f565b92915050565b6000602082019050611392600083018461119e565b92915050565b600060208201905081810360008301526113b281846111ad565b905092915050565b600060208201905081810360008301526113d3816111e6565b9050919050565b600060208201905081810360008301526113f381611209565b9050919050565b600060208201905081810360008301526114138161122c565b9050919050565b600060208201905081810360008301526114338161124f565b9050919050565b6000602082019050818103600083015261145381611272565b9050919050565b6000602082019050818103600083015261147381611295565b9050919050565b60006020820190508181036000830152611493816112b8565b9050919050565b600060208201905081810360008301526114b3816112db565b9050919050565b600060208201905081810360008301526114d3816112fe565b9050919050565b600060208201905081810360008301526114f381611321565b9050919050565b600060208201905061150f6000830184611344565b92915050565b600060208201905061152a6000830184611353565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611557826115e0565b9150611562836115e0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115975761159661165c565b5b828201905092915050565b60006115ad826115c0565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156116155780820151818401526020810190506115fa565b83811115611624576000848401525b50505050565b6000600282049050600182168061164257607f821691505b602082108114156116565761165561168b565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611978816115a2565b811461198357600080fd5b50565b61198f816115e0565b811461199a57600080fd5b5056fea26469706673582212202c6a60ac32df71a1fc99f7058dbdd883f5b76f350503553222c96ce893ff4ff064736f6c63430008040033",
      opcodes: "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x216E CODESIZE SUB DUP1 PUSH3 0x216E DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x432 JUMP JUMPDEST DUP3 DUP3 DUP2 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x51 SWAP3 SWAP2 SWAP1 PUSH3 0x2F9 JUMP JUMPDEST POP DUP1 PUSH1 0x4 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x6A SWAP3 SWAP2 SWAP1 PUSH3 0x2F9 JUMP JUMPDEST POP POP POP PUSH3 0x8D PUSH3 0x81 PUSH3 0xA8 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0xB0 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x9F CALLER DUP3 PUSH3 0x176 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP POP PUSH3 0x78B JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH3 0x1E9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH3 0x1E0 SWAP1 PUSH3 0x4F2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH3 0x1FD PUSH1 0x0 DUP4 DUP4 PUSH3 0x2EF PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH3 0x211 SWAP2 SWAP1 PUSH3 0x5A1 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH3 0x268 SWAP2 SWAP1 PUSH3 0x5A1 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH3 0x2CF SWAP2 SWAP1 PUSH3 0x514 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH3 0x2EB PUSH1 0x0 DUP4 DUP4 PUSH3 0x2F4 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x307 SWAP1 PUSH3 0x63E JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x32B JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x377 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x346 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x377 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x377 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x376 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x359 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x386 SWAP2 SWAP1 PUSH3 0x38A JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x3A5 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x38B JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x3C0 PUSH3 0x3BA DUP5 PUSH3 0x55A JUMP JUMPDEST PUSH3 0x531 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x3D9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x3E6 DUP5 DUP3 DUP6 PUSH3 0x608 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x400 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH3 0x412 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x3A9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x42C DUP2 PUSH3 0x771 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x448 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x463 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x471 DUP7 DUP3 DUP8 ADD PUSH3 0x3EE JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x48F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x49D DUP7 DUP3 DUP8 ADD PUSH3 0x3EE JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH3 0x4B0 DUP7 DUP3 DUP8 ADD PUSH3 0x41B JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x4C9 PUSH1 0x1F DUP4 PUSH3 0x590 JUMP JUMPDEST SWAP2 POP PUSH3 0x4D6 DUP3 PUSH3 0x748 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x4EC DUP2 PUSH3 0x5FE JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH3 0x50D DUP2 PUSH3 0x4BA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH3 0x52B PUSH1 0x0 DUP4 ADD DUP5 PUSH3 0x4E1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x53D PUSH3 0x550 JUMP JUMPDEST SWAP1 POP PUSH3 0x54B DUP3 DUP3 PUSH3 0x674 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x578 JUMPI PUSH3 0x577 PUSH3 0x708 JUMP JUMPDEST JUMPDEST PUSH3 0x583 DUP3 PUSH3 0x737 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x5AE DUP3 PUSH3 0x5FE JUMP JUMPDEST SWAP2 POP PUSH3 0x5BB DUP4 PUSH3 0x5FE JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH3 0x5F3 JUMPI PUSH3 0x5F2 PUSH3 0x6AA JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x628 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x60B JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x638 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x657 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x66E JUMPI PUSH3 0x66D PUSH3 0x6D9 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x67F DUP3 PUSH3 0x737 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x6A1 JUMPI PUSH3 0x6A0 PUSH3 0x708 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH3 0x77C DUP2 PUSH3 0x5FE JUMP JUMPDEST DUP2 EQ PUSH3 0x788 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x19D3 DUP1 PUSH3 0x79B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xF5 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x70A08231 GT PUSH2 0x97 JUMPI DUP1 PUSH4 0xA457C2D7 GT PUSH2 0x66 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x276 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x2A6 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x2D6 JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x306 JUMPI PUSH2 0xF5 JUMP JUMPDEST DUP1 PUSH4 0x70A08231 EQ PUSH2 0x200 JUMPI DUP1 PUSH4 0x715018A6 EQ PUSH2 0x230 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x23A JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x258 JUMPI PUSH2 0xF5 JUMP JUMPDEST DUP1 PUSH4 0x23B872DD GT PUSH2 0xD3 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x166 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x196 JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x1B4 JUMPI DUP1 PUSH4 0x40C10F19 EQ PUSH2 0x1E4 JUMPI PUSH2 0xF5 JUMP JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0xFA JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x118 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x148 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x102 PUSH2 0x322 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x10F SWAP2 SWAP1 PUSH2 0x1398 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x132 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x12D SWAP2 SWAP1 PUSH2 0x1153 JUMP JUMPDEST PUSH2 0x3B4 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x13F SWAP2 SWAP1 PUSH2 0x137D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x150 PUSH2 0x3D7 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15D SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x180 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x17B SWAP2 SWAP1 PUSH2 0x1104 JUMP JUMPDEST PUSH2 0x3E1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x18D SWAP2 SWAP1 PUSH2 0x137D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x19E PUSH2 0x410 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1AB SWAP2 SWAP1 PUSH2 0x1515 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1CE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1C9 SWAP2 SWAP1 PUSH2 0x1153 JUMP JUMPDEST PUSH2 0x419 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1DB SWAP2 SWAP1 PUSH2 0x137D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1FE PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1F9 SWAP2 SWAP1 PUSH2 0x1153 JUMP JUMPDEST PUSH2 0x4C3 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x21A PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x215 SWAP2 SWAP1 PUSH2 0x109F JUMP JUMPDEST PUSH2 0x54D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x227 SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x238 PUSH2 0x595 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x242 PUSH2 0x61D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x24F SWAP2 SWAP1 PUSH2 0x1362 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x260 PUSH2 0x647 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x26D SWAP2 SWAP1 PUSH2 0x1398 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x290 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x28B SWAP2 SWAP1 PUSH2 0x1153 JUMP JUMPDEST PUSH2 0x6D9 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x29D SWAP2 SWAP1 PUSH2 0x137D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2C0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2BB SWAP2 SWAP1 PUSH2 0x1153 JUMP JUMPDEST PUSH2 0x7C3 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2CD SWAP2 SWAP1 PUSH2 0x137D JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2F0 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2EB SWAP2 SWAP1 PUSH2 0x10C8 JUMP JUMPDEST PUSH2 0x7E6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2FD SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x320 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x31B SWAP2 SWAP1 PUSH2 0x109F JUMP JUMPDEST PUSH2 0x86D JUMP JUMPDEST STOP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x331 SWAP1 PUSH2 0x162A JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x35D SWAP1 PUSH2 0x162A JUMP JUMPDEST DUP1 ISZERO PUSH2 0x3AA JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x37F JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x3AA JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x38D JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x3BF PUSH2 0x965 JUMP JUMPDEST SWAP1 POP PUSH2 0x3CC DUP2 DUP6 DUP6 PUSH2 0x96D JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x3EC PUSH2 0x965 JUMP JUMPDEST SWAP1 POP PUSH2 0x3F9 DUP6 DUP3 DUP6 PUSH2 0xB38 JUMP JUMPDEST PUSH2 0x404 DUP6 DUP6 DUP6 PUSH2 0xBC4 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x12 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x424 PUSH2 0x965 JUMP JUMPDEST SWAP1 POP PUSH2 0x4B8 DUP2 DUP6 DUP6 PUSH1 0x1 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP10 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x4B3 SWAP2 SWAP1 PUSH2 0x154C JUMP JUMPDEST PUSH2 0x96D JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x4CB PUSH2 0x965 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x4E9 PUSH2 0x61D JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x53F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x536 SWAP1 PUSH2 0x145A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x549 DUP3 DUP3 PUSH2 0xE45 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x59D PUSH2 0x965 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x5BB PUSH2 0x61D JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x611 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x608 SWAP1 PUSH2 0x145A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x61B PUSH1 0x0 PUSH2 0xFA5 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD PUSH2 0x656 SWAP1 PUSH2 0x162A JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x682 SWAP1 PUSH2 0x162A JUMP JUMPDEST DUP1 ISZERO PUSH2 0x6CF JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x6A4 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x6CF JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x6B2 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x6E4 PUSH2 0x965 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP4 DUP2 LT ISZERO PUSH2 0x7AA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7A1 SWAP1 PUSH2 0x14BA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7B7 DUP3 DUP7 DUP7 DUP5 SUB PUSH2 0x96D JUMP JUMPDEST PUSH1 0x1 SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x7CE PUSH2 0x965 JUMP JUMPDEST SWAP1 POP PUSH2 0x7DB DUP2 DUP6 DUP6 PUSH2 0xBC4 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x875 PUSH2 0x965 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x893 PUSH2 0x61D JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x8E9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x8E0 SWAP1 PUSH2 0x145A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x959 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x950 SWAP1 PUSH2 0x13DA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x962 DUP2 PUSH2 0xFA5 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x9DD JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x9D4 SWAP1 PUSH2 0x149A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xA4D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA44 SWAP1 PUSH2 0x13FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP4 PUSH1 0x40 MLOAD PUSH2 0xB2B SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB44 DUP5 DUP5 PUSH2 0x7E6 JUMP JUMPDEST SWAP1 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 EQ PUSH2 0xBBE JUMPI DUP2 DUP2 LT ISZERO PUSH2 0xBB0 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xBA7 SWAP1 PUSH2 0x141A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xBBD DUP5 DUP5 DUP5 DUP5 SUB PUSH2 0x96D JUMP JUMPDEST JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xC34 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xC2B SWAP1 PUSH2 0x147A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xCA4 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xC9B SWAP1 PUSH2 0x13BA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xCAF DUP4 DUP4 DUP4 PUSH2 0x106B JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP2 DUP2 LT ISZERO PUSH2 0xD35 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xD2C SWAP1 PUSH2 0x143A JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 DUP2 SUB PUSH1 0x0 DUP1 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xDC8 SWAP2 SWAP1 PUSH2 0x154C JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0xE2C SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0xE3F DUP5 DUP5 DUP5 PUSH2 0x1070 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xEB5 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xEAC SWAP1 PUSH2 0x14DA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xEC1 PUSH1 0x0 DUP4 DUP4 PUSH2 0x106B JUMP JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xED3 SWAP2 SWAP1 PUSH2 0x154C JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xF28 SWAP2 SWAP1 PUSH2 0x154C JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH2 0xF8D SWAP2 SWAP1 PUSH2 0x14FA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0xFA1 PUSH1 0x0 DUP4 DUP4 PUSH2 0x1070 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1084 DUP2 PUSH2 0x196F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1099 DUP2 PUSH2 0x1986 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x10B1 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x10BF DUP5 DUP3 DUP6 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x10DB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x10E9 DUP6 DUP3 DUP7 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x10FA DUP6 DUP3 DUP7 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x1119 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1127 DUP7 DUP3 DUP8 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x1138 DUP7 DUP3 DUP8 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x1149 DUP7 DUP3 DUP8 ADD PUSH2 0x108A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1166 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1174 DUP6 DUP3 DUP7 ADD PUSH2 0x1075 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1185 DUP6 DUP3 DUP7 ADD PUSH2 0x108A JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH2 0x1198 DUP2 PUSH2 0x15A2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x11A7 DUP2 PUSH2 0x15B4 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x11B8 DUP3 PUSH2 0x1530 JUMP JUMPDEST PUSH2 0x11C2 DUP2 DUP6 PUSH2 0x153B JUMP JUMPDEST SWAP4 POP PUSH2 0x11D2 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x15F7 JUMP JUMPDEST PUSH2 0x11DB DUP2 PUSH2 0x16BA JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x11F3 PUSH1 0x23 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x11FE DUP3 PUSH2 0x16CB JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1216 PUSH1 0x26 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x1221 DUP3 PUSH2 0x171A JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1239 PUSH1 0x22 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x1244 DUP3 PUSH2 0x1769 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x125C PUSH1 0x1D DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x1267 DUP3 PUSH2 0x17B8 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x127F PUSH1 0x26 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x128A DUP3 PUSH2 0x17E1 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12A2 PUSH1 0x20 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x12AD DUP3 PUSH2 0x1830 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12C5 PUSH1 0x25 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x12D0 DUP3 PUSH2 0x1859 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12E8 PUSH1 0x24 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x12F3 DUP3 PUSH2 0x18A8 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x130B PUSH1 0x25 DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x1316 DUP3 PUSH2 0x18F7 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x132E PUSH1 0x1F DUP4 PUSH2 0x153B JUMP JUMPDEST SWAP2 POP PUSH2 0x1339 DUP3 PUSH2 0x1946 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x134D DUP2 PUSH2 0x15E0 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x135C DUP2 PUSH2 0x15EA JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1377 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x118F JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1392 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x119E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x13B2 DUP2 DUP5 PUSH2 0x11AD JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x13D3 DUP2 PUSH2 0x11E6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x13F3 DUP2 PUSH2 0x1209 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1413 DUP2 PUSH2 0x122C JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1433 DUP2 PUSH2 0x124F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1453 DUP2 PUSH2 0x1272 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1473 DUP2 PUSH2 0x1295 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1493 DUP2 PUSH2 0x12B8 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14B3 DUP2 PUSH2 0x12DB JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14D3 DUP2 PUSH2 0x12FE JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14F3 DUP2 PUSH2 0x1321 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x150F PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1344 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x152A PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1353 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1557 DUP3 PUSH2 0x15E0 JUMP JUMPDEST SWAP2 POP PUSH2 0x1562 DUP4 PUSH2 0x15E0 JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x1597 JUMPI PUSH2 0x1596 PUSH2 0x165C JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x15AD DUP3 PUSH2 0x15C0 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1615 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x15FA JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x1624 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x1642 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x1656 JUMPI PUSH2 0x1655 PUSH2 0x168B JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6573730000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7373000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20696E73756666696369656E7420616C6C6F77616E6365000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220616D6F756E7420657863656564732062 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x616C616E63650000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6472657373000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7265737300000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A2064656372656173656420616C6C6F77616E63652062656C6F77 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x207A65726F000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x1978 DUP2 PUSH2 0x15A2 JUMP JUMPDEST DUP2 EQ PUSH2 0x1983 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x198F DUP2 PUSH2 0x15E0 JUMP JUMPDEST DUP2 EQ PUSH2 0x199A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x2C PUSH11 0x60AC32DF71A1FC99F7058D 0xBD 0xD8 DUP4 CREATE2 0xB7 PUSH16 0x350503553222C96CE893FF4FF064736F PUSH13 0x63430008040033000000000000 ",
      sourceMap: "177:305:5:-:0;;;224:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;317:5;324:7;2052:5:1;2044;:13;;;;;;;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;;;;;;;:::i;:::-;;1978:113;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;341:33:5::1;347:10;359:14;341:5;;;:33;;:::i;:::-;224:156:::0;;;177:305;;640:96:4;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;8415:389:1:-;8517:1;8498:21;;:7;:21;;;;8490:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8566:49;8595:1;8599:7;8608:6;8566:20;;;:49;;:::i;:::-;8642:6;8626:12;;:22;;;;;;;:::i;:::-;;;;;;;;8680:6;8658:9;:18;8668:7;8658:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8722:7;8701:37;;8718:1;8701:37;;;8731:6;8701:37;;;;;;:::i;:::-;;;;;;;;8749:48;8777:1;8781:7;8790:6;8749:19;;;:48;;:::i;:::-;8415:389;;:::o;11795:121::-;;;;:::o;12504:120::-;;;;:::o;177:305:5:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:354:6:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:2;;;303:1;300;293:12;262:2;316:39;348:6;343:3;338;316:39;:::i;:::-;102:259;;;;;;:::o;381:288::-;448:5;497:3;490:4;482:6;478:17;474:27;464:2;;515:1;512;505:12;464:2;548:6;542:13;573:90;659:3;651:6;644:4;636:6;632:17;573:90;:::i;:::-;564:99;;454:215;;;;;:::o;675:143::-;732:5;763:6;757:13;748:22;;779:33;806:5;779:33;:::i;:::-;738:80;;;;:::o;824:808::-;932:6;940;948;997:2;985:9;976:7;972:23;968:32;965:2;;;1013:1;1010;1003:12;965:2;1077:1;1066:9;1062:17;1056:24;1107:18;1099:6;1096:30;1093:2;;;1139:1;1136;1129:12;1093:2;1167:74;1233:7;1224:6;1213:9;1209:22;1167:74;:::i;:::-;1157:84;;1027:224;1311:2;1300:9;1296:18;1290:25;1342:18;1334:6;1331:30;1328:2;;;1374:1;1371;1364:12;1328:2;1402:74;1468:7;1459:6;1448:9;1444:22;1402:74;:::i;:::-;1392:84;;1261:225;1525:2;1551:64;1607:7;1598:6;1587:9;1583:22;1551:64;:::i;:::-;1541:74;;1496:129;955:677;;;;;:::o;1638:366::-;1780:3;1801:67;1865:2;1860:3;1801:67;:::i;:::-;1794:74;;1877:93;1966:3;1877:93;:::i;:::-;1995:2;1990:3;1986:12;1979:19;;1784:220;;;:::o;2010:118::-;2097:24;2115:5;2097:24;:::i;:::-;2092:3;2085:37;2075:53;;:::o;2134:419::-;2300:4;2338:2;2327:9;2323:18;2315:26;;2387:9;2381:4;2377:20;2373:1;2362:9;2358:17;2351:47;2415:131;2541:4;2415:131;:::i;:::-;2407:139;;2305:248;;;:::o;2559:222::-;2652:4;2690:2;2679:9;2675:18;2667:26;;2703:71;2771:1;2760:9;2756:17;2747:6;2703:71;:::i;:::-;2657:124;;;;:::o;2787:129::-;2821:6;2848:20;;:::i;:::-;2838:30;;2877:33;2905:4;2897:6;2877:33;:::i;:::-;2828:88;;;:::o;2922:75::-;2955:6;2988:2;2982:9;2972:19;;2962:35;:::o;3003:308::-;3065:4;3155:18;3147:6;3144:30;3141:2;;;3177:18;;:::i;:::-;3141:2;3215:29;3237:6;3215:29;:::i;:::-;3207:37;;3299:4;3293;3289:15;3281:23;;3070:241;;;:::o;3317:169::-;3401:11;3435:6;3430:3;3423:19;3475:4;3470:3;3466:14;3451:29;;3413:73;;;;:::o;3492:305::-;3532:3;3551:20;3569:1;3551:20;:::i;:::-;3546:25;;3585:20;3603:1;3585:20;:::i;:::-;3580:25;;3739:1;3671:66;3667:74;3664:1;3661:81;3658:2;;;3745:18;;:::i;:::-;3658:2;3789:1;3786;3782:9;3775:16;;3536:261;;;;:::o;3803:77::-;3840:7;3869:5;3858:16;;3848:32;;;:::o;3886:307::-;3954:1;3964:113;3978:6;3975:1;3972:13;3964:113;;;4063:1;4058:3;4054:11;4048:18;4044:1;4039:3;4035:11;4028:39;4000:2;3997:1;3993:10;3988:15;;3964:113;;;4095:6;4092:1;4089:13;4086:2;;;4175:1;4166:6;4161:3;4157:16;4150:27;4086:2;3935:258;;;;:::o;4199:320::-;4243:6;4280:1;4274:4;4270:12;4260:22;;4327:1;4321:4;4317:12;4348:18;4338:2;;4404:4;4396:6;4392:17;4382:27;;4338:2;4466;4458:6;4455:14;4435:18;4432:38;4429:2;;;4485:18;;:::i;:::-;4429:2;4250:269;;;;:::o;4525:281::-;4608:27;4630:4;4608:27;:::i;:::-;4600:6;4596:40;4738:6;4726:10;4723:22;4702:18;4690:10;4687:34;4684:62;4681:2;;;4749:18;;:::i;:::-;4681:2;4789:10;4785:2;4778:22;4568:238;;;:::o;4812:180::-;4860:77;4857:1;4850:88;4957:4;4954:1;4947:15;4981:4;4978:1;4971:15;4998:180;5046:77;5043:1;5036:88;5143:4;5140:1;5133:15;5167:4;5164:1;5157:15;5184:180;5232:77;5229:1;5222:88;5329:4;5326:1;5319:15;5353:4;5350:1;5343:15;5370:102;5411:6;5462:2;5458:7;5453:2;5446:5;5442:14;5438:28;5428:38;;5418:54;;;:::o;5478:181::-;5618:33;5614:1;5606:6;5602:14;5595:57;5584:75;:::o;5665:122::-;5738:24;5756:5;5738:24;:::i;:::-;5731:5;5728:35;5718:2;;5777:1;5774;5767:12;5718:2;5708:79;:::o;177:305:5:-;;;;;;;"
    }
  },
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string"
        },
        {
          internalType: "string",
          name: "_symbol",
          type: "string"
        },
        {
          internalType: "uint256",
          name: "initialBalance",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "address",
          name: "spender",
          type: "address"
        }
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256"
        }
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256"
        }
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};

export const contractsReef20DeployWithMint = {
  '@openzeppelin/contracts/access/Ownable.sol': '// SPDX-License-Identifier: MIT\n' +
    '// OpenZeppelin Contracts v4.4.1 (access/Ownable.sol)\n' +
    '\n' +
    'pragma solidity ^0.8.0;\n' +
    '\n' +
    'import "../utils/Context.sol";\n' +
    '\n' +
    '/**\n' +
    ' * @dev Contract module which provides a basic access control mechanism, where\n' +
    ' * there is an account (an owner) that can be granted exclusive access to\n' +
    ' * specific functions.\n' +
    ' *\n' +
    ' * By default, the owner account will be the one that deploys the contract. This\n' +
    ' * can later be changed with {transferOwnership}.\n' +
    ' *\n' +
    ' * This module is used through inheritance. It will make available the modifier\n' +
    ' * `onlyOwner`, which can be applied to your functions to restrict their use to\n' +
    ' * the owner.\n' +
    ' */\n' +
    'abstract contract Ownable is Context {\n' +
    '    address private _owner;\n' +
    '\n' +
    '    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Initializes the contract setting the deployer as the initial owner.\n' +
    '     */\n' +
    '    constructor() {\n' +
    '        _transferOwnership(_msgSender());\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Returns the address of the current owner.\n' +
    '     */\n' +
    '    function owner() public view virtual returns (address) {\n' +
    '        return _owner;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Throws if called by any account other than the owner.\n' +
    '     */\n' +
    '    modifier onlyOwner() {\n' +
    '        require(owner() == _msgSender(), "Ownable: caller is not the owner");\n' +
    '        _;\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Leaves the contract without owner. It will not be possible to call\n' +
    '     * `onlyOwner` functions anymore. Can only be called by the current owner.\n' +
    '     *\n' +
    '     * NOTE: Renouncing ownership will leave the contract without an owner,\n' +
    '     * thereby removing any functionality that is only available to the owner.\n' +
    '     */\n' +
    '    function renounceOwnership() public virtual onlyOwner {\n' +
    '        _transferOwnership(address(0));\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n' +
    '     * Can only be called by the current owner.\n' +
    '     */\n' +
    '    function transferOwnership(address newOwner) public virtual onlyOwner {\n' +
    '        require(newOwner != address(0), "Ownable: new owner is the zero address");\n' +
    '        _transferOwnership(newOwner);\n' +
    '    }\n' +
    '\n' +
    '    /**\n' +
    '     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n' +
    '     * Internal function without access restriction.\n' +
    '     */\n' +
    '    function _transferOwnership(address newOwner) internal virtual {\n' +
    '        address oldOwner = _owner;\n' +
    '        _owner = newOwner;\n' +
    '        emit OwnershipTransferred(oldOwner, newOwner);\n' +
    '    }\n' +
    '}\n',
  '@openzeppelin/contracts/token/ERC20/ERC20.sol': "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"./IERC20.sol\";\nimport \"./extensions/IERC20Metadata.sol\";\nimport \"../../utils/Context.sol\";\n\n/**\n * @dev Implementation of the {IERC20} interface.\n *\n * This implementation is agnostic to the way tokens are created. This means\n * that a supply mechanism has to be added in a derived contract using {_mint}.\n * For a generic mechanism see {ERC20PresetMinterPauser}.\n *\n * TIP: For a detailed writeup see our guide\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\n * to implement supply mechanisms].\n *\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\n * instead returning `false` on failure. This behavior is nonetheless\n * conventional and does not conflict with the expectations of ERC20\n * applications.\n *\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\n * This allows applications to reconstruct the allowance for all accounts just\n * by listening to said events. Other implementations of the EIP may not emit\n * these events, as it isn't required by the specification.\n *\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\n * functions have been added to mitigate the well-known issues around setting\n * allowances. See {IERC20-approve}.\n */\ncontract ERC20 is Context, IERC20, IERC20Metadata {\n    mapping(address => uint256) private _balances;\n\n    mapping(address => mapping(address => uint256)) private _allowances;\n\n    uint256 private _totalSupply;\n\n    string private _name;\n    string private _symbol;\n\n    /**\n     * @dev Sets the values for {name} and {symbol}.\n     *\n     * The default value of {decimals} is 18. To select a different value for\n     * {decimals} you should overload it.\n     *\n     * All two of these values are immutable: they can only be set once during\n     * construction.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev Returns the symbol of the token, usually a shorter version of the\n     * name.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev Returns the number of decimals used to get its user representation.\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\n     *\n     * Tokens usually opt for a value of 18, imitating the relationship between\n     * Ether and Wei. This is the value {ERC20} uses, unless this function is\n     * overridden;\n     *\n     * NOTE: This information is only used for _display_ purposes: it in\n     * no way affects any of the arithmetic of the contract, including\n     * {IERC20-balanceOf} and {IERC20-transfer}.\n     */\n    function decimals() public view virtual override returns (uint8) {\n        return 18;\n    }\n\n    /**\n     * @dev See {IERC20-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _totalSupply;\n    }\n\n    /**\n     * @dev See {IERC20-balanceOf}.\n     */\n    function balanceOf(address account) public view virtual override returns (uint256) {\n        return _balances[account];\n    }\n\n    /**\n     * @dev See {IERC20-transfer}.\n     *\n     * Requirements:\n     *\n     * - `recipient` cannot be the zero address.\n     * - the caller must have a balance of at least `amount`.\n     */\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\n        _transfer(_msgSender(), recipient, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-allowance}.\n     */\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\n        return _allowances[owner][spender];\n    }\n\n    /**\n     * @dev See {IERC20-approve}.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\n        _approve(_msgSender(), spender, amount);\n        return true;\n    }\n\n    /**\n     * @dev See {IERC20-transferFrom}.\n     *\n     * Emits an {Approval} event indicating the updated allowance. This is not\n     * required by the EIP. See the note at the beginning of {ERC20}.\n     *\n     * Requirements:\n     *\n     * - `sender` and `recipient` cannot be the zero address.\n     * - `sender` must have a balance of at least `amount`.\n     * - the caller must have allowance for ``sender``'s tokens of at least\n     * `amount`.\n     */\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) public virtual override returns (bool) {\n        _transfer(sender, recipient, amount);\n\n        uint256 currentAllowance = _allowances[sender][_msgSender()];\n        require(currentAllowance >= amount, \"ERC20: transfer amount exceeds allowance\");\n        unchecked {\n            _approve(sender, _msgSender(), currentAllowance - amount);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     */\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender] + addedValue);\n        return true;\n    }\n\n    /**\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\n     *\n     * This is an alternative to {approve} that can be used as a mitigation for\n     * problems described in {IERC20-approve}.\n     *\n     * Emits an {Approval} event indicating the updated allowance.\n     *\n     * Requirements:\n     *\n     * - `spender` cannot be the zero address.\n     * - `spender` must have allowance for the caller of at least\n     * `subtractedValue`.\n     */\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\n        uint256 currentAllowance = _allowances[_msgSender()][spender];\n        require(currentAllowance >= subtractedValue, \"ERC20: decreased allowance below zero\");\n        unchecked {\n            _approve(_msgSender(), spender, currentAllowance - subtractedValue);\n        }\n\n        return true;\n    }\n\n    /**\n     * @dev Moves `amount` of tokens from `sender` to `recipient`.\n     *\n     * This internal function is equivalent to {transfer}, and can be used to\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\n     *\n     * Emits a {Transfer} event.\n     *\n     * Requirements:\n     *\n     * - `sender` cannot be the zero address.\n     * - `recipient` cannot be the zero address.\n     * - `sender` must have a balance of at least `amount`.\n     */\n    function _transfer(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) internal virtual {\n        require(sender != address(0), \"ERC20: transfer from the zero address\");\n        require(recipient != address(0), \"ERC20: transfer to the zero address\");\n\n        _beforeTokenTransfer(sender, recipient, amount);\n\n        uint256 senderBalance = _balances[sender];\n        require(senderBalance >= amount, \"ERC20: transfer amount exceeds balance\");\n        unchecked {\n            _balances[sender] = senderBalance - amount;\n        }\n        _balances[recipient] += amount;\n\n        emit Transfer(sender, recipient, amount);\n\n        _afterTokenTransfer(sender, recipient, amount);\n    }\n\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\n     * the total supply.\n     *\n     * Emits a {Transfer} event with `from` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     */\n    function _mint(address account, uint256 amount) internal virtual {\n        require(account != address(0), \"ERC20: mint to the zero address\");\n\n        _beforeTokenTransfer(address(0), account, amount);\n\n        _totalSupply += amount;\n        _balances[account] += amount;\n        emit Transfer(address(0), account, amount);\n\n        _afterTokenTransfer(address(0), account, amount);\n    }\n\n    /**\n     * @dev Destroys `amount` tokens from `account`, reducing the\n     * total supply.\n     *\n     * Emits a {Transfer} event with `to` set to the zero address.\n     *\n     * Requirements:\n     *\n     * - `account` cannot be the zero address.\n     * - `account` must have at least `amount` tokens.\n     */\n    function _burn(address account, uint256 amount) internal virtual {\n        require(account != address(0), \"ERC20: burn from the zero address\");\n\n        _beforeTokenTransfer(account, address(0), amount);\n\n        uint256 accountBalance = _balances[account];\n        require(accountBalance >= amount, \"ERC20: burn amount exceeds balance\");\n        unchecked {\n            _balances[account] = accountBalance - amount;\n        }\n        _totalSupply -= amount;\n\n        emit Transfer(account, address(0), amount);\n\n        _afterTokenTransfer(account, address(0), amount);\n    }\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\n     *\n     * This internal function is equivalent to `approve`, and can be used to\n     * e.g. set automatic allowances for certain subsystems, etc.\n     *\n     * Emits an {Approval} event.\n     *\n     * Requirements:\n     *\n     * - `owner` cannot be the zero address.\n     * - `spender` cannot be the zero address.\n     */\n    function _approve(\n        address owner,\n        address spender,\n        uint256 amount\n    ) internal virtual {\n        require(owner != address(0), \"ERC20: approve from the zero address\");\n        require(spender != address(0), \"ERC20: approve to the zero address\");\n\n        _allowances[owner][spender] = amount;\n        emit Approval(owner, spender, amount);\n    }\n\n    /**\n     * @dev Hook that is called before any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\n     * will be transferred to `to`.\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n\n    /**\n     * @dev Hook that is called after any transfer of tokens. This includes\n     * minting and burning.\n     *\n     * Calling conditions:\n     *\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\n     * has been transferred to `to`.\n     * - when `from` is zero, `amount` tokens have been minted for `to`.\n     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _afterTokenTransfer(\n        address from,\n        address to,\n        uint256 amount\n    ) internal virtual {}\n}\n",
  '@openzeppelin/contracts/token/ERC20/IERC20.sol': "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  '@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol': '// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../IERC20.sol";\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n',
  '@openzeppelin/contracts/utils/Context.sol': '// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n',
  'contracts/ReefMintable.sol': '\n' +
    '// SPDX-License-Identifier: MIT\n' +
    'pragma solidity ^0.8.0;\n' +
    '\n' +
    'import "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n' +
    'import "@openzeppelin/contracts/access/Ownable.sol";\n' +
    '\n' +
    '\n' +
    'contract ReefMintable is ERC20, Ownable {\n' +
    '\n' +
    '  constructor(string memory _name, string memory _symbol, uint256 initialBalance) public ERC20(_name, _symbol) {\n' +
    '     _mint(msg.sender, initialBalance);\n' +
    '  }\n' +
    '  \n' +
    '  function mint(address to, uint amount) external onlyOwner {\n' +
    '    _mint(to, amount);\n' +
    '  }\n' +
    ' \n' +
    '}\n',
};

export const metadataArtifactReef20DeployWithMint = {
  compiler: {
    version: '0.8.4+commit.c7e474f2',
  },
  output: {
    abi: [
      {
        inputs: [
          {
            internalType: "string",
            name: "_name",
            type: "string"
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "initialBalance",
            type: "uint256"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          }
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256"
          }
        ],
        name: "decreaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256"
          }
        ],
        name: "increaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      }
    ],
  },
  settings: {
    compilationTarget: {
      'contracts/ReefMintable.sol': 'ReefMintable',
    },
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  version: 1,
};
