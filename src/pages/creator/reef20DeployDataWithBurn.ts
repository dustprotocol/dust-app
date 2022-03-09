export const metadataReef20WithBurn = {
  bytecode: {
    generatedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:5790:7",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "102:259:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "112:75:7",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "179:6:7"
                            }
                          ],
                          functionName: {
                            name: "array_allocation_size_t_string_memory_ptr",
                            nodeType: "YulIdentifier",
                            src: "137:41:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "137:49:7"
                        }
                      ],
                      functionName: {
                        name: "allocate_memory",
                        nodeType: "YulIdentifier",
                        src: "121:15:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "121:66:7"
                    },
                    variableNames: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "112:5:7"
                      }
                    ]
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "array",
                          nodeType: "YulIdentifier",
                          src: "203:5:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "210:6:7"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "196:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "196:21:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "196:21:7"
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "226:27:7",
                    value: {
                      arguments: [
                        {
                          name: "array",
                          nodeType: "YulIdentifier",
                          src: "241:5:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "248:4:7",
                          type: "",
                          value: "0x20"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "237:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "237:16:7"
                    },
                    variables: [
                      {
                        name: "dst",
                        nodeType: "YulTypedName",
                        src: "230:3:7",
                        type: ""
                      }
                    ]
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "291:16:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "300:1:7",
                                type: "",
                                value: "0"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "303:1:7",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "293:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "293:12:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "293:12:7"
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
                              src: "272:3:7"
                            },
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "277:6:7"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "268:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "268:16:7"
                        },
                        {
                          name: "end",
                          nodeType: "YulIdentifier",
                          src: "286:3:7"
                        }
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "265:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "265:25:7"
                    },
                    nodeType: "YulIf",
                    src: "262:2:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "src",
                          nodeType: "YulIdentifier",
                          src: "338:3:7"
                        },
                        {
                          name: "dst",
                          nodeType: "YulIdentifier",
                          src: "343:3:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "348:6:7"
                        }
                      ],
                      functionName: {
                        name: "copy_memory_to_memory",
                        nodeType: "YulIdentifier",
                        src: "316:21:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "316:39:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "316:39:7"
                  }
                ]
              },
              name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "src",
                  nodeType: "YulTypedName",
                  src: "75:3:7",
                  type: ""
                },
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "80:6:7",
                  type: ""
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "88:3:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "array",
                  nodeType: "YulTypedName",
                  src: "96:5:7",
                  type: ""
                }
              ],
              src: "7:354:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "454:215:7",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "503:16:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "512:1:7",
                                type: "",
                                value: "0"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "515:1:7",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "505:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "505:12:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "505:12:7"
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
                                  src: "482:6:7"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "490:4:7",
                                  type: "",
                                  value: "0x1f"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "478:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "478:17:7"
                            },
                            {
                              name: "end",
                              nodeType: "YulIdentifier",
                              src: "497:3:7"
                            }
                          ],
                          functionName: {
                            name: "slt",
                            nodeType: "YulIdentifier",
                            src: "474:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "474:27:7"
                        }
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "467:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "467:35:7"
                    },
                    nodeType: "YulIf",
                    src: "464:2:7"
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "528:27:7",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "548:6:7"
                        }
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "542:5:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "542:13:7"
                    },
                    variables: [
                      {
                        name: "length",
                        nodeType: "YulTypedName",
                        src: "532:6:7",
                        type: ""
                      }
                    ]
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "564:99:7",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "636:6:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "644:4:7",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "632:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "632:17:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "651:6:7"
                        },
                        {
                          name: "end",
                          nodeType: "YulIdentifier",
                          src: "659:3:7"
                        }
                      ],
                      functionName: {
                        name: "abi_decode_available_length_t_string_memory_ptr_fromMemory",
                        nodeType: "YulIdentifier",
                        src: "573:58:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "573:90:7"
                    },
                    variableNames: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "564:5:7"
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
                  src: "432:6:7",
                  type: ""
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "440:3:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "array",
                  nodeType: "YulTypedName",
                  src: "448:5:7",
                  type: ""
                }
              ],
              src: "381:288:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "738:80:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "748:22:7",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "763:6:7"
                        }
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "757:5:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "757:13:7"
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "748:5:7"
                      }
                    ]
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "806:5:7"
                        }
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "779:26:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "779:33:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "779:33:7"
                  }
                ]
              },
              name: "abi_decode_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "716:6:7",
                  type: ""
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "724:3:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "732:5:7",
                  type: ""
                }
              ],
              src: "675:143:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "955:677:7",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "1001:16:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1010:1:7",
                                type: "",
                                value: "0"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1013:1:7",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "1003:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "1003:12:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "1003:12:7"
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
                              src: "976:7:7"
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "985:9:7"
                            }
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "972:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "972:23:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "997:2:7",
                          type: "",
                          value: "96"
                        }
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "968:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "968:32:7"
                    },
                    nodeType: "YulIf",
                    src: "965:2:7"
                  },
                  {
                    nodeType: "YulBlock",
                    src: "1027:224:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1042:38:7",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1066:9:7"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1077:1:7",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1062:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1062:17:7"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "1056:5:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1056:24:7"
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "1046:6:7",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "1127:16:7",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1136:1:7",
                                    type: "",
                                    value: "0"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1139:1:7",
                                    type: "",
                                    value: "0"
                                  }
                                ],
                                functionName: {
                                  name: "revert",
                                  nodeType: "YulIdentifier",
                                  src: "1129:6:7"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1129:12:7"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "1129:12:7"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "1099:6:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1107:18:7",
                              type: "",
                              value: "0xffffffffffffffff"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "1096:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1096:30:7"
                        },
                        nodeType: "YulIf",
                        src: "1093:2:7"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1157:84:7",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1213:9:7"
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "1224:6:7"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1209:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1209:22:7"
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1233:7:7"
                            }
                          ],
                          functionName: {
                            name: "abi_decode_t_string_memory_ptr_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "1167:41:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1167:74:7"
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "1157:6:7"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    nodeType: "YulBlock",
                    src: "1261:225:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1276:39:7",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1300:9:7"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1311:2:7",
                                  type: "",
                                  value: "32"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1296:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1296:18:7"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "1290:5:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1290:25:7"
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "1280:6:7",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "1362:16:7",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1371:1:7",
                                    type: "",
                                    value: "0"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1374:1:7",
                                    type: "",
                                    value: "0"
                                  }
                                ],
                                functionName: {
                                  name: "revert",
                                  nodeType: "YulIdentifier",
                                  src: "1364:6:7"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1364:12:7"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "1364:12:7"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "1334:6:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1342:18:7",
                              type: "",
                              value: "0xffffffffffffffff"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "1331:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1331:30:7"
                        },
                        nodeType: "YulIf",
                        src: "1328:2:7"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1392:84:7",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1448:9:7"
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "1459:6:7"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1444:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1444:22:7"
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1468:7:7"
                            }
                          ],
                          functionName: {
                            name: "abi_decode_t_string_memory_ptr_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "1402:41:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1402:74:7"
                        },
                        variableNames: [
                          {
                            name: "value1",
                            nodeType: "YulIdentifier",
                            src: "1392:6:7"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    nodeType: "YulBlock",
                    src: "1496:129:7",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1511:16:7",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1525:2:7",
                          type: "",
                          value: "64"
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "1515:6:7",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1541:74:7",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1587:9:7"
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "1598:6:7"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1583:3:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1583:22:7"
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1607:7:7"
                            }
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "1551:31:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1551:64:7"
                        },
                        variableNames: [
                          {
                            name: "value2",
                            nodeType: "YulIdentifier",
                            src: "1541:6:7"
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
                  src: "909:9:7",
                  type: ""
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "920:7:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "932:6:7",
                  type: ""
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "940:6:7",
                  type: ""
                },
                {
                  name: "value2",
                  nodeType: "YulTypedName",
                  src: "948:6:7",
                  type: ""
                }
              ],
              src: "824:808:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1784:220:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1794:74:7",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1860:3:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1865:2:7",
                          type: "",
                          value: "31"
                        }
                      ],
                      functionName: {
                        name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        nodeType: "YulIdentifier",
                        src: "1801:58:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "1801:67:7"
                    },
                    variableNames: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "1794:3:7"
                      }
                    ]
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1966:3:7"
                        }
                      ],
                      functionName: {
                        name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                        nodeType: "YulIdentifier",
                        src: "1877:88:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "1877:93:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1877:93:7"
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1979:19:7",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1990:3:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1995:2:7",
                          type: "",
                          value: "32"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "1986:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "1986:12:7"
                    },
                    variableNames: [
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "1979:3:7"
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
                  src: "1772:3:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "1780:3:7",
                  type: ""
                }
              ],
              src: "1638:366:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2075:53:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "2092:3:7"
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "2115:5:7"
                            }
                          ],
                          functionName: {
                            name: "cleanup_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2097:17:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2097:24:7"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "2085:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2085:37:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2085:37:7"
                  }
                ]
              },
              name: "abi_encode_t_uint256_to_t_uint256_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2063:5:7",
                  type: ""
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "2070:3:7",
                  type: ""
                }
              ],
              src: "2010:118:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2305:248:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2315:26:7",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "2327:9:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2338:2:7",
                          type: "",
                          value: "32"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "2323:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2323:18:7"
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2315:4:7"
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
                              src: "2362:9:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2373:1:7",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2358:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2358:17:7"
                        },
                        {
                          arguments: [
                            {
                              name: "tail",
                              nodeType: "YulIdentifier",
                              src: "2381:4:7"
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "2387:9:7"
                            }
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "2377:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2377:20:7"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "2351:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2351:47:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2351:47:7"
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "2407:139:7",
                    value: {
                      arguments: [
                        {
                          name: "tail",
                          nodeType: "YulIdentifier",
                          src: "2541:4:7"
                        }
                      ],
                      functionName: {
                        name: "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                        nodeType: "YulIdentifier",
                        src: "2415:124:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2415:131:7"
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2407:4:7"
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
                  src: "2285:9:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "2300:4:7",
                  type: ""
                }
              ],
              src: "2134:419:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2657:124:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2667:26:7",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "2679:9:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2690:2:7",
                          type: "",
                          value: "32"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "2675:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2675:18:7"
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2667:4:7"
                      }
                    ]
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2747:6:7"
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "2760:9:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2771:1:7",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2756:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2756:17:7"
                        }
                      ],
                      functionName: {
                        name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                        nodeType: "YulIdentifier",
                        src: "2703:43:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2703:71:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2703:71:7"
                  }
                ]
              },
              name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "2629:9:7",
                  type: ""
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "2641:6:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "2652:4:7",
                  type: ""
                }
              ],
              src: "2559:222:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2828:88:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2838:30:7",
                    value: {
                      arguments: [],
                      functionName: {
                        name: "allocate_unbounded",
                        nodeType: "YulIdentifier",
                        src: "2848:18:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2848:20:7"
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "2838:6:7"
                      }
                    ]
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "memPtr",
                          nodeType: "YulIdentifier",
                          src: "2897:6:7"
                        },
                        {
                          name: "size",
                          nodeType: "YulIdentifier",
                          src: "2905:4:7"
                        }
                      ],
                      functionName: {
                        name: "finalize_allocation",
                        nodeType: "YulIdentifier",
                        src: "2877:19:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2877:33:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2877:33:7"
                  }
                ]
              },
              name: "allocate_memory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "size",
                  nodeType: "YulTypedName",
                  src: "2812:4:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "2821:6:7",
                  type: ""
                }
              ],
              src: "2787:129:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2962:35:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2972:19:7",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2988:2:7",
                          type: "",
                          value: "64"
                        }
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "2982:5:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "2982:9:7"
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "2972:6:7"
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
                  src: "2955:6:7",
                  type: ""
                }
              ],
              src: "2922:75:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3070:241:7",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "3175:22:7",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x41",
                              nodeType: "YulIdentifier",
                              src: "3177:16:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3177:18:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3177:18:7"
                        }
                      ]
                    },
                    condition: {
                      arguments: [
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "3147:6:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3155:18:7",
                          type: "",
                          value: "0xffffffffffffffff"
                        }
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "3144:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3144:30:7"
                    },
                    nodeType: "YulIf",
                    src: "3141:2:7"
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3207:37:7",
                    value: {
                      arguments: [
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "3237:6:7"
                        }
                      ],
                      functionName: {
                        name: "round_up_to_mul_of_32",
                        nodeType: "YulIdentifier",
                        src: "3215:21:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3215:29:7"
                    },
                    variableNames: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "3207:4:7"
                      }
                    ]
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3281:23:7",
                    value: {
                      arguments: [
                        {
                          name: "size",
                          nodeType: "YulIdentifier",
                          src: "3293:4:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3299:4:7",
                          type: "",
                          value: "0x20"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3289:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3289:15:7"
                    },
                    variableNames: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "3281:4:7"
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
                  src: "3054:6:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "size",
                  nodeType: "YulTypedName",
                  src: "3065:4:7",
                  type: ""
                }
              ],
              src: "3003:308:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3413:73:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "3430:3:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "3435:6:7"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "3423:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3423:19:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3423:19:7"
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3451:29:7",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "3470:3:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3475:4:7",
                          type: "",
                          value: "0x20"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3466:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3466:14:7"
                    },
                    variableNames: [
                      {
                        name: "updated_pos",
                        nodeType: "YulIdentifier",
                        src: "3451:11:7"
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
                  src: "3385:3:7",
                  type: ""
                },
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "3390:6:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "updated_pos",
                  nodeType: "YulTypedName",
                  src: "3401:11:7",
                  type: ""
                }
              ],
              src: "3317:169:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3536:261:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3546:25:7",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "3569:1:7"
                        }
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "3551:17:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3551:20:7"
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "3546:1:7"
                      }
                    ]
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3580:25:7",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "3603:1:7"
                        }
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "3585:17:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3585:20:7"
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "3580:1:7"
                      }
                    ]
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "3743:22:7",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x11",
                              nodeType: "YulIdentifier",
                              src: "3745:16:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3745:18:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3745:18:7"
                        }
                      ]
                    },
                    condition: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "3664:1:7"
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3671:66:7",
                              type: "",
                              value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            },
                            {
                              name: "y",
                              nodeType: "YulIdentifier",
                              src: "3739:1:7"
                            }
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "3667:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3667:74:7"
                        }
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "3661:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3661:81:7"
                    },
                    nodeType: "YulIf",
                    src: "3658:2:7"
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3775:16:7",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "3786:1:7"
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "3789:1:7"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3782:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3782:9:7"
                    },
                    variableNames: [
                      {
                        name: "sum",
                        nodeType: "YulIdentifier",
                        src: "3775:3:7"
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
                  src: "3523:1:7",
                  type: ""
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "3526:1:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "sum",
                  nodeType: "YulTypedName",
                  src: "3532:3:7",
                  type: ""
                }
              ],
              src: "3492:305:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3848:32:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3858:16:7",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "3869:5:7"
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "3858:7:7"
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
                  src: "3830:5:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "3840:7:7",
                  type: ""
                }
              ],
              src: "3803:77:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3935:258:7",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "3945:10:7",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "3954:1:7",
                      type: "",
                      value: "0"
                    },
                    variables: [
                      {
                        name: "i",
                        nodeType: "YulTypedName",
                        src: "3949:1:7",
                        type: ""
                      }
                    ]
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4014:63:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dst",
                                    nodeType: "YulIdentifier",
                                    src: "4039:3:7"
                                  },
                                  {
                                    name: "i",
                                    nodeType: "YulIdentifier",
                                    src: "4044:1:7"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "4035:3:7"
                                },
                                nodeType: "YulFunctionCall",
                                src: "4035:11:7"
                              },
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "src",
                                        nodeType: "YulIdentifier",
                                        src: "4058:3:7"
                                      },
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "4063:1:7"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4054:3:7"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4054:11:7"
                                  }
                                ],
                                functionName: {
                                  name: "mload",
                                  nodeType: "YulIdentifier",
                                  src: "4048:5:7"
                                },
                                nodeType: "YulFunctionCall",
                                src: "4048:18:7"
                              }
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "4028:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4028:39:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4028:39:7"
                        }
                      ]
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "3975:1:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "3978:6:7"
                        }
                      ],
                      functionName: {
                        name: "lt",
                        nodeType: "YulIdentifier",
                        src: "3972:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "3972:13:7"
                    },
                    nodeType: "YulForLoop",
                    post: {
                      nodeType: "YulBlock",
                      src: "3986:19:7",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "3988:15:7",
                          value: {
                            arguments: [
                              {
                                name: "i",
                                nodeType: "YulIdentifier",
                                src: "3997:1:7"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4000:2:7",
                                type: "",
                                value: "32"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3993:3:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3993:10:7"
                          },
                          variableNames: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "3988:1:7"
                            }
                          ]
                        }
                      ]
                    },
                    pre: {
                      nodeType: "YulBlock",
                      src: "3968:3:7",
                      statements: []
                    },
                    src: "3964:113:7"
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4111:76:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dst",
                                    nodeType: "YulIdentifier",
                                    src: "4161:3:7"
                                  },
                                  {
                                    name: "length",
                                    nodeType: "YulIdentifier",
                                    src: "4166:6:7"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "4157:3:7"
                                },
                                nodeType: "YulFunctionCall",
                                src: "4157:16:7"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4175:1:7",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "4150:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4150:27:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4150:27:7"
                        }
                      ]
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "4092:1:7"
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "4095:6:7"
                        }
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "4089:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4089:13:7"
                    },
                    nodeType: "YulIf",
                    src: "4086:2:7"
                  }
                ]
              },
              name: "copy_memory_to_memory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "src",
                  nodeType: "YulTypedName",
                  src: "3917:3:7",
                  type: ""
                },
                {
                  name: "dst",
                  nodeType: "YulTypedName",
                  src: "3922:3:7",
                  type: ""
                },
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "3927:6:7",
                  type: ""
                }
              ],
              src: "3886:307:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4250:269:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "4260:22:7",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "4274:4:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4280:1:7",
                          type: "",
                          value: "2"
                        }
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "4270:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4270:12:7"
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4260:6:7"
                      }
                    ]
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "4291:38:7",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "4321:4:7"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4327:1:7",
                          type: "",
                          value: "1"
                        }
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "4317:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4317:12:7"
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "4295:18:7",
                        type: ""
                      }
                    ]
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4368:51:7",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "4382:27:7",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "4396:6:7"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4404:4:7",
                                type: "",
                                value: "0x7f"
                              }
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "4392:3:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4392:17:7"
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "4382:6:7"
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
                          src: "4348:18:7"
                        }
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "4341:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4341:26:7"
                    },
                    nodeType: "YulIf",
                    src: "4338:2:7"
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4471:42:7",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x22",
                              nodeType: "YulIdentifier",
                              src: "4485:16:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4485:18:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4485:18:7"
                        }
                      ]
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "4435:18:7"
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "4458:6:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4466:2:7",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "4455:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4455:14:7"
                        }
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "4432:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4432:38:7"
                    },
                    nodeType: "YulIf",
                    src: "4429:2:7"
                  }
                ]
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "4234:4:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "4243:6:7",
                  type: ""
                }
              ],
              src: "4199:320:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4568:238:7",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "4578:58:7",
                    value: {
                      arguments: [
                        {
                          name: "memPtr",
                          nodeType: "YulIdentifier",
                          src: "4600:6:7"
                        },
                        {
                          arguments: [
                            {
                              name: "size",
                              nodeType: "YulIdentifier",
                              src: "4630:4:7"
                            }
                          ],
                          functionName: {
                            name: "round_up_to_mul_of_32",
                            nodeType: "YulIdentifier",
                            src: "4608:21:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4608:27:7"
                        }
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "4596:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4596:40:7"
                    },
                    variables: [
                      {
                        name: "newFreePtr",
                        nodeType: "YulTypedName",
                        src: "4582:10:7",
                        type: ""
                      }
                    ]
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4747:22:7",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x41",
                              nodeType: "YulIdentifier",
                              src: "4749:16:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4749:18:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4749:18:7"
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
                              src: "4690:10:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4702:18:7",
                              type: "",
                              value: "0xffffffffffffffff"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "4687:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4687:34:7"
                        },
                        {
                          arguments: [
                            {
                              name: "newFreePtr",
                              nodeType: "YulIdentifier",
                              src: "4726:10:7"
                            },
                            {
                              name: "memPtr",
                              nodeType: "YulIdentifier",
                              src: "4738:6:7"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "4723:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4723:22:7"
                        }
                      ],
                      functionName: {
                        name: "or",
                        nodeType: "YulIdentifier",
                        src: "4684:2:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4684:62:7"
                    },
                    nodeType: "YulIf",
                    src: "4681:2:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4785:2:7",
                          type: "",
                          value: "64"
                        },
                        {
                          name: "newFreePtr",
                          nodeType: "YulIdentifier",
                          src: "4789:10:7"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "4778:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4778:22:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4778:22:7"
                  }
                ]
              },
              name: "finalize_allocation",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "4554:6:7",
                  type: ""
                },
                {
                  name: "size",
                  nodeType: "YulTypedName",
                  src: "4562:4:7",
                  type: ""
                }
              ],
              src: "4525:281:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4840:152:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4857:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4860:77:7",
                          type: "",
                          value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "4850:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4850:88:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4850:88:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4954:1:7",
                          type: "",
                          value: "4"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4957:4:7",
                          type: "",
                          value: "0x11"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "4947:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4947:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4947:15:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4978:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4981:4:7",
                          type: "",
                          value: "0x24"
                        }
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "4971:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "4971:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4971:15:7"
                  }
                ]
              },
              name: "panic_error_0x11",
              nodeType: "YulFunctionDefinition",
              src: "4812:180:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5026:152:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5043:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5046:77:7",
                          type: "",
                          value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5036:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5036:88:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5036:88:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5140:1:7",
                          type: "",
                          value: "4"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5143:4:7",
                          type: "",
                          value: "0x22"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5133:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5133:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5133:15:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5164:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5167:4:7",
                          type: "",
                          value: "0x24"
                        }
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5157:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5157:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5157:15:7"
                  }
                ]
              },
              name: "panic_error_0x22",
              nodeType: "YulFunctionDefinition",
              src: "4998:180:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5212:152:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5229:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5232:77:7",
                          type: "",
                          value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5222:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5222:88:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5222:88:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5326:1:7",
                          type: "",
                          value: "4"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5329:4:7",
                          type: "",
                          value: "0x41"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5319:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5319:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5319:15:7"
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5350:1:7",
                          type: "",
                          value: "0"
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5353:4:7",
                          type: "",
                          value: "0x24"
                        }
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5343:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5343:15:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5343:15:7"
                  }
                ]
              },
              name: "panic_error_0x41",
              nodeType: "YulFunctionDefinition",
              src: "5184:180:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5418:54:7",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5428:38:7",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "5446:5:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5453:2:7",
                              type: "",
                              value: "31"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "5442:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5442:14:7"
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5462:2:7",
                              type: "",
                              value: "31"
                            }
                          ],
                          functionName: {
                            name: "not",
                            nodeType: "YulIdentifier",
                            src: "5458:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5458:7:7"
                        }
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "5438:3:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5438:28:7"
                    },
                    variableNames: [
                      {
                        name: "result",
                        nodeType: "YulIdentifier",
                        src: "5428:6:7"
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
                  src: "5401:5:7",
                  type: ""
                }
              ],
              returnVariables: [
                {
                  name: "result",
                  nodeType: "YulTypedName",
                  src: "5411:6:7",
                  type: ""
                }
              ],
              src: "5370:102:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5584:75:7",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "memPtr",
                              nodeType: "YulIdentifier",
                              src: "5606:6:7"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5614:1:7",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "5602:3:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5602:14:7"
                        },
                        {
                          kind: "string",
                          nodeType: "YulLiteral",
                          src: "5618:33:7",
                          type: "",
                          value: "ERC20: mint to the zero address"
                        }
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5595:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5595:57:7"
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5595:57:7"
                  }
                ]
              },
              name: "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "5576:6:7",
                  type: ""
                }
              ],
              src: "5478:181:7"
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5708:79:7",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5765:16:7",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5774:1:7",
                                type: "",
                                value: "0"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5777:1:7",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "5767:6:7"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5767:12:7"
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5767:12:7"
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
                              src: "5731:5:7"
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "5756:5:7"
                                }
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "5738:17:7"
                              },
                              nodeType: "YulFunctionCall",
                              src: "5738:24:7"
                            }
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "5728:2:7"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5728:35:7"
                        }
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "5721:6:7"
                      },
                      nodeType: "YulFunctionCall",
                      src: "5721:43:7"
                    },
                    nodeType: "YulIf",
                    src: "5718:2:7"
                  }
                ]
              },
              name: "validator_revert_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "5701:5:7",
                  type: ""
                }
              ],
              src: "5665:122:7"
            }
          ]
        },
        contents: "{\n\n    function abi_decode_available_length_t_string_memory_ptr_fromMemory(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_memory_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr_fromMemory(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := mload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr_fromMemory(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256_fromMemory(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := mload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := mload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
        id: 7,
        language: "Yul",
        name: "#utility.yul"
      }
    ],
    linkReferences: {},
    object: "60806040523480156200001157600080fd5b506040516200234038038062002340833981810160405281019062000037919062000432565b8282816003908051906020019062000051929190620002f9565b5080600490805190602001906200006a929190620002f9565b5050506200008d62000081620000a860201b60201c565b620000b060201b60201c565b6200009f33826200017660201b60201c565b5050506200078b565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620001e9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001e090620004f2565b60405180910390fd5b620001fd60008383620002ef60201b60201c565b8060026000828254620002119190620005a1565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002689190620005a1565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002cf919062000514565b60405180910390a3620002eb60008383620002f460201b60201c565b5050565b505050565b505050565b82805462000307906200063e565b90600052602060002090601f0160209004810192826200032b576000855562000377565b82601f106200034657805160ff191683800117855562000377565b8280016001018555821562000377579182015b828111156200037657825182559160200191906001019062000359565b5b5090506200038691906200038a565b5090565b5b80821115620003a55760008160009055506001016200038b565b5090565b6000620003c0620003ba846200055a565b62000531565b905082815260208101848484011115620003d957600080fd5b620003e684828562000608565b509392505050565b600082601f8301126200040057600080fd5b815162000412848260208601620003a9565b91505092915050565b6000815190506200042c8162000771565b92915050565b6000806000606084860312156200044857600080fd5b600084015167ffffffffffffffff8111156200046357600080fd5b6200047186828701620003ee565b935050602084015167ffffffffffffffff8111156200048f57600080fd5b6200049d86828701620003ee565b9250506040620004b0868287016200041b565b9150509250925092565b6000620004c9601f8362000590565b9150620004d68262000748565b602082019050919050565b620004ec81620005fe565b82525050565b600060208201905081810360008301526200050d81620004ba565b9050919050565b60006020820190506200052b6000830184620004e1565b92915050565b60006200053d62000550565b90506200054b828262000674565b919050565b6000604051905090565b600067ffffffffffffffff82111562000578576200057762000708565b5b620005838262000737565b9050602081019050919050565b600082825260208201905092915050565b6000620005ae82620005fe565b9150620005bb83620005fe565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005f357620005f2620006aa565b5b828201905092915050565b6000819050919050565b60005b83811015620006285780820151818401526020810190506200060b565b8381111562000638576000848401525b50505050565b600060028204905060018216806200065757607f821691505b602082108114156200066e576200066d620006d9565b5b50919050565b6200067f8262000737565b810181811067ffffffffffffffff82111715620006a157620006a062000708565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6200077c81620005fe565b81146200078857600080fd5b50565b611ba5806200079b6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d71461029d578063a9059cbb146102cd578063dd62ed3e146102fd578063f2fde38b1461032d57610100565b8063715018a61461023b57806379cc6790146102455780638da5cb5b1461026157806395d89b411461027f57610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806342966c68146101ef57806370a082311461020b57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610349565b60405161011a91906114a1565b60405180910390f35b61013d60048036038101906101389190611210565b6103db565b60405161014a9190611486565b60405180910390f35b61015b6103fe565b6040516101689190611623565b60405180910390f35b61018b600480360381019061018691906111c1565b610408565b6040516101989190611486565b60405180910390f35b6101a9610437565b6040516101b6919061163e565b60405180910390f35b6101d960048036038101906101d49190611210565b610440565b6040516101e69190611486565b60405180910390f35b6102096004803603810190610204919061124c565b6104ea565b005b6102256004803603810190610220919061115c565b610573565b6040516102329190611623565b60405180910390f35b6102436105bb565b005b61025f600480360381019061025a9190611210565b610643565b005b610269610663565b604051610276919061146b565b60405180910390f35b61028761068d565b60405161029491906114a1565b60405180910390f35b6102b760048036038101906102b29190611210565b61071f565b6040516102c49190611486565b60405180910390f35b6102e760048036038101906102e29190611210565b610809565b6040516102f49190611486565b60405180910390f35b61031760048036038101906103129190611185565b61082c565b6040516103249190611623565b60405180910390f35b6103476004803603810190610342919061115c565b6108b3565b005b60606003805461035890611787565b80601f016020809104026020016040519081016040528092919081815260200182805461038490611787565b80156103d15780601f106103a6576101008083540402835291602001916103d1565b820191906000526020600020905b8154815290600101906020018083116103b457829003601f168201915b5050505050905090565b6000806103e66109ab565b90506103f38185856109b3565b600191505092915050565b6000600254905090565b6000806104136109ab565b9050610420858285610b7e565b61042b858585610c0a565b60019150509392505050565b60006012905090565b60008061044b6109ab565b90506104df818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104da9190611675565b6109b3565b600191505092915050565b6104f26109ab565b73ffffffffffffffffffffffffffffffffffffffff16610510610663565b73ffffffffffffffffffffffffffffffffffffffff1614610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d90611583565b60405180910390fd5b6105703382610e8b565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6105c36109ab565b73ffffffffffffffffffffffffffffffffffffffff166105e1610663565b73ffffffffffffffffffffffffffffffffffffffff1614610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062e90611583565b60405180910390fd5b6106416000611062565b565b6106558261064f6109ab565b83610b7e565b61065f8282610e8b565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461069c90611787565b80601f01602080910402602001604051908101604052809291908181526020018280546106c890611787565b80156107155780601f106106ea57610100808354040283529160200191610715565b820191906000526020600020905b8154815290600101906020018083116106f857829003601f168201915b5050505050905090565b60008061072a6109ab565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156107f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e790611603565b60405180910390fd5b6107fd82868684036109b3565b60019250505092915050565b6000806108146109ab565b9050610821818585610c0a565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6108bb6109ab565b73ffffffffffffffffffffffffffffffffffffffff166108d9610663565b73ffffffffffffffffffffffffffffffffffffffff161461092f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092690611583565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561099f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099690611503565b60405180910390fd5b6109a881611062565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a906115e3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a93576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8a90611523565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610b719190611623565b60405180910390a3505050565b6000610b8a848461082c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c045781811015610bf6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bed90611543565b60405180910390fd5b610c0384848484036109b3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c71906115c3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce1906114c3565b60405180910390fd5b610cf5838383611128565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610d7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7290611563565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e0e9190611675565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e729190611623565b60405180910390a3610e8584848461112d565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef2906115a3565b60405180910390fd5b610f0782600083611128565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610f8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f84906114e3565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000828254610fe491906116cb565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110499190611623565b60405180910390a361105d8360008461112d565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008135905061114181611b41565b92915050565b60008135905061115681611b58565b92915050565b60006020828403121561116e57600080fd5b600061117c84828501611132565b91505092915050565b6000806040838503121561119857600080fd5b60006111a685828601611132565b92505060206111b785828601611132565b9150509250929050565b6000806000606084860312156111d657600080fd5b60006111e486828701611132565b93505060206111f586828701611132565b925050604061120686828701611147565b9150509250925092565b6000806040838503121561122357600080fd5b600061123185828601611132565b925050602061124285828601611147565b9150509250929050565b60006020828403121561125e57600080fd5b600061126c84828501611147565b91505092915050565b61127e816116ff565b82525050565b61128d81611711565b82525050565b600061129e82611659565b6112a88185611664565b93506112b8818560208601611754565b6112c181611817565b840191505092915050565b60006112d9602383611664565b91506112e482611828565b604082019050919050565b60006112fc602283611664565b915061130782611877565b604082019050919050565b600061131f602683611664565b915061132a826118c6565b604082019050919050565b6000611342602283611664565b915061134d82611915565b604082019050919050565b6000611365601d83611664565b915061137082611964565b602082019050919050565b6000611388602683611664565b91506113938261198d565b604082019050919050565b60006113ab602083611664565b91506113b6826119dc565b602082019050919050565b60006113ce602183611664565b91506113d982611a05565b604082019050919050565b60006113f1602583611664565b91506113fc82611a54565b604082019050919050565b6000611414602483611664565b915061141f82611aa3565b604082019050919050565b6000611437602583611664565b915061144282611af2565b604082019050919050565b6114568161173d565b82525050565b61146581611747565b82525050565b60006020820190506114806000830184611275565b92915050565b600060208201905061149b6000830184611284565b92915050565b600060208201905081810360008301526114bb8184611293565b905092915050565b600060208201905081810360008301526114dc816112cc565b9050919050565b600060208201905081810360008301526114fc816112ef565b9050919050565b6000602082019050818103600083015261151c81611312565b9050919050565b6000602082019050818103600083015261153c81611335565b9050919050565b6000602082019050818103600083015261155c81611358565b9050919050565b6000602082019050818103600083015261157c8161137b565b9050919050565b6000602082019050818103600083015261159c8161139e565b9050919050565b600060208201905081810360008301526115bc816113c1565b9050919050565b600060208201905081810360008301526115dc816113e4565b9050919050565b600060208201905081810360008301526115fc81611407565b9050919050565b6000602082019050818103600083015261161c8161142a565b9050919050565b6000602082019050611638600083018461144d565b92915050565b6000602082019050611653600083018461145c565b92915050565b600081519050919050565b600082825260208201905092915050565b60006116808261173d565b915061168b8361173d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116c0576116bf6117b9565b5b828201905092915050565b60006116d68261173d565b91506116e18361173d565b9250828210156116f4576116f36117b9565b5b828203905092915050565b600061170a8261171d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611772578082015181840152602081019050611757565b83811115611781576000848401525b50505050565b6000600282049050600182168061179f57607f821691505b602082108114156117b3576117b26117e8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b611b4a816116ff565b8114611b5557600080fd5b50565b611b618161173d565b8114611b6c57600080fd5b5056fea264697066735822122016ee225485f66e03894f3c3732bdef1a2f96cea2099f03ec905aafc336a725e364736f6c63430008040033",
    opcodes: "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH3 0x2340 CODESIZE SUB DUP1 PUSH3 0x2340 DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH3 0x37 SWAP2 SWAP1 PUSH3 0x432 JUMP JUMPDEST DUP3 DUP3 DUP2 PUSH1 0x3 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x51 SWAP3 SWAP2 SWAP1 PUSH3 0x2F9 JUMP JUMPDEST POP DUP1 PUSH1 0x4 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH3 0x6A SWAP3 SWAP2 SWAP1 PUSH3 0x2F9 JUMP JUMPDEST POP POP POP PUSH3 0x8D PUSH3 0x81 PUSH3 0xA8 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0xB0 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x9F CALLER DUP3 PUSH3 0x176 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP POP PUSH3 0x78B JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH3 0x1E9 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH3 0x1E0 SWAP1 PUSH3 0x4F2 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH3 0x1FD PUSH1 0x0 DUP4 DUP4 PUSH3 0x2EF PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH3 0x211 SWAP2 SWAP1 PUSH3 0x5A1 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH3 0x268 SWAP2 SWAP1 PUSH3 0x5A1 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH3 0x2CF SWAP2 SWAP1 PUSH3 0x514 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH3 0x2EB PUSH1 0x0 DUP4 DUP4 PUSH3 0x2F4 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH3 0x307 SWAP1 PUSH3 0x63E JUMP JUMPDEST SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH3 0x32B JUMPI PUSH1 0x0 DUP6 SSTORE PUSH3 0x377 JUMP JUMPDEST DUP3 PUSH1 0x1F LT PUSH3 0x346 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH3 0x377 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH3 0x377 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH3 0x376 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH3 0x359 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH3 0x386 SWAP2 SWAP1 PUSH3 0x38A JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH3 0x3A5 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH3 0x38B JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x3C0 PUSH3 0x3BA DUP5 PUSH3 0x55A JUMP JUMPDEST PUSH3 0x531 JUMP JUMPDEST SWAP1 POP DUP3 DUP2 MSTORE PUSH1 0x20 DUP2 ADD DUP5 DUP5 DUP5 ADD GT ISZERO PUSH3 0x3D9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x3E6 DUP5 DUP3 DUP6 PUSH3 0x608 JUMP JUMPDEST POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH1 0x1F DUP4 ADD SLT PUSH3 0x400 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 MLOAD PUSH3 0x412 DUP5 DUP3 PUSH1 0x20 DUP7 ADD PUSH3 0x3A9 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP PUSH3 0x42C DUP2 PUSH3 0x771 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH3 0x448 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x463 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x471 DUP7 DUP3 DUP8 ADD PUSH3 0x3EE JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 DUP5 ADD MLOAD PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x48F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH3 0x49D DUP7 DUP3 DUP8 ADD PUSH3 0x3EE JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH3 0x4B0 DUP7 DUP3 DUP8 ADD PUSH3 0x41B JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH3 0x4C9 PUSH1 0x1F DUP4 PUSH3 0x590 JUMP JUMPDEST SWAP2 POP PUSH3 0x4D6 DUP3 PUSH3 0x748 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x4EC DUP2 PUSH3 0x5FE JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH3 0x50D DUP2 PUSH3 0x4BA JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH3 0x52B PUSH1 0x0 DUP4 ADD DUP5 PUSH3 0x4E1 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x53D PUSH3 0x550 JUMP JUMPDEST SWAP1 POP PUSH3 0x54B DUP3 DUP3 PUSH3 0x674 JUMP JUMPDEST SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x40 MLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT ISZERO PUSH3 0x578 JUMPI PUSH3 0x577 PUSH3 0x708 JUMP JUMPDEST JUMPDEST PUSH3 0x583 DUP3 PUSH3 0x737 JUMP JUMPDEST SWAP1 POP PUSH1 0x20 DUP2 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x5AE DUP3 PUSH3 0x5FE JUMP JUMPDEST SWAP2 POP PUSH3 0x5BB DUP4 PUSH3 0x5FE JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH3 0x5F3 JUMPI PUSH3 0x5F2 PUSH3 0x6AA JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH3 0x628 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x60B JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH3 0x638 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x657 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH3 0x66E JUMPI PUSH3 0x66D PUSH3 0x6D9 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x67F DUP3 PUSH3 0x737 JUMP JUMPDEST DUP2 ADD DUP2 DUP2 LT PUSH8 0xFFFFFFFFFFFFFFFF DUP3 GT OR ISZERO PUSH3 0x6A1 JUMPI PUSH3 0x6A0 PUSH3 0x708 JUMP JUMPDEST JUMPDEST DUP1 PUSH1 0x40 MSTORE POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH3 0x77C DUP2 PUSH3 0x5FE JUMP JUMPDEST DUP2 EQ PUSH3 0x788 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1BA5 DUP1 PUSH3 0x79B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x100 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x715018A6 GT PUSH2 0x97 JUMPI DUP1 PUSH4 0xA457C2D7 GT PUSH2 0x66 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x29D JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x2CD JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x2FD JUMPI DUP1 PUSH4 0xF2FDE38B EQ PUSH2 0x32D JUMPI PUSH2 0x100 JUMP JUMPDEST DUP1 PUSH4 0x715018A6 EQ PUSH2 0x23B JUMPI DUP1 PUSH4 0x79CC6790 EQ PUSH2 0x245 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x261 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x27F JUMPI PUSH2 0x100 JUMP JUMPDEST DUP1 PUSH4 0x313CE567 GT PUSH2 0xD3 JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x1A1 JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x1BF JUMPI DUP1 PUSH4 0x42966C68 EQ PUSH2 0x1EF JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x20B JUMPI PUSH2 0x100 JUMP JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0x105 JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0x123 JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0x153 JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x171 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x10D PUSH2 0x349 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11A SWAP2 SWAP1 PUSH2 0x14A1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x13D PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x138 SWAP2 SWAP1 PUSH2 0x1210 JUMP JUMPDEST PUSH2 0x3DB JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x14A SWAP2 SWAP1 PUSH2 0x1486 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x15B PUSH2 0x3FE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x168 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x18B PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x186 SWAP2 SWAP1 PUSH2 0x11C1 JUMP JUMPDEST PUSH2 0x408 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x198 SWAP2 SWAP1 PUSH2 0x1486 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1A9 PUSH2 0x437 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1B6 SWAP2 SWAP1 PUSH2 0x163E JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1D9 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1D4 SWAP2 SWAP1 PUSH2 0x1210 JUMP JUMPDEST PUSH2 0x440 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1E6 SWAP2 SWAP1 PUSH2 0x1486 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x209 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x204 SWAP2 SWAP1 PUSH2 0x124C JUMP JUMPDEST PUSH2 0x4EA JUMP JUMPDEST STOP JUMPDEST PUSH2 0x225 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x220 SWAP2 SWAP1 PUSH2 0x115C JUMP JUMPDEST PUSH2 0x573 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x232 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x243 PUSH2 0x5BB JUMP JUMPDEST STOP JUMPDEST PUSH2 0x25F PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x25A SWAP2 SWAP1 PUSH2 0x1210 JUMP JUMPDEST PUSH2 0x643 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x269 PUSH2 0x663 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x276 SWAP2 SWAP1 PUSH2 0x146B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x287 PUSH2 0x68D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x294 SWAP2 SWAP1 PUSH2 0x14A1 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2B7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2B2 SWAP2 SWAP1 PUSH2 0x1210 JUMP JUMPDEST PUSH2 0x71F JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2C4 SWAP2 SWAP1 PUSH2 0x1486 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x2E7 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x2E2 SWAP2 SWAP1 PUSH2 0x1210 JUMP JUMPDEST PUSH2 0x809 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x2F4 SWAP2 SWAP1 PUSH2 0x1486 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x317 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x312 SWAP2 SWAP1 PUSH2 0x1185 JUMP JUMPDEST PUSH2 0x82C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x324 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x347 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x342 SWAP2 SWAP1 PUSH2 0x115C JUMP JUMPDEST PUSH2 0x8B3 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x358 SWAP1 PUSH2 0x1787 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x384 SWAP1 PUSH2 0x1787 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x3D1 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x3A6 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x3D1 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x3B4 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x3E6 PUSH2 0x9AB JUMP JUMPDEST SWAP1 POP PUSH2 0x3F3 DUP2 DUP6 DUP6 PUSH2 0x9B3 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x413 PUSH2 0x9AB JUMP JUMPDEST SWAP1 POP PUSH2 0x420 DUP6 DUP3 DUP6 PUSH2 0xB7E JUMP JUMPDEST PUSH2 0x42B DUP6 DUP6 DUP6 PUSH2 0xC0A JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x12 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x44B PUSH2 0x9AB JUMP JUMPDEST SWAP1 POP PUSH2 0x4DF DUP2 DUP6 DUP6 PUSH1 0x1 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP10 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD PUSH2 0x4DA SWAP2 SWAP1 PUSH2 0x1675 JUMP JUMPDEST PUSH2 0x9B3 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x4F2 PUSH2 0x9AB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x510 PUSH2 0x663 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x566 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x55D SWAP1 PUSH2 0x1583 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x570 CALLER DUP3 PUSH2 0xE8B JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x5C3 PUSH2 0x9AB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x5E1 PUSH2 0x663 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x637 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x62E SWAP1 PUSH2 0x1583 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x641 PUSH1 0x0 PUSH2 0x1062 JUMP JUMPDEST JUMP JUMPDEST PUSH2 0x655 DUP3 PUSH2 0x64F PUSH2 0x9AB JUMP JUMPDEST DUP4 PUSH2 0xB7E JUMP JUMPDEST PUSH2 0x65F DUP3 DUP3 PUSH2 0xE8B JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD PUSH2 0x69C SWAP1 PUSH2 0x1787 JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x6C8 SWAP1 PUSH2 0x1787 JUMP JUMPDEST DUP1 ISZERO PUSH2 0x715 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x6EA JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x715 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x6F8 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x72A PUSH2 0x9AB JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP4 DUP2 LT ISZERO PUSH2 0x7F0 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7E7 SWAP1 PUSH2 0x1603 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7FD DUP3 DUP7 DUP7 DUP5 SUB PUSH2 0x9B3 JUMP JUMPDEST PUSH1 0x1 SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x814 PUSH2 0x9AB JUMP JUMPDEST SWAP1 POP PUSH2 0x821 DUP2 DUP6 DUP6 PUSH2 0xC0A JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x8BB PUSH2 0x9AB JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8D9 PUSH2 0x663 JUMP JUMPDEST PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x92F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x926 SWAP1 PUSH2 0x1583 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0x99F JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x996 SWAP1 PUSH2 0x1503 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x9A8 DUP2 PUSH2 0x1062 JUMP JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xA23 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA1A SWAP1 PUSH2 0x15E3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xA93 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xA8A SWAP1 PUSH2 0x1523 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP4 PUSH1 0x40 MLOAD PUSH2 0xB71 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB8A DUP5 DUP5 PUSH2 0x82C JUMP JUMPDEST SWAP1 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 EQ PUSH2 0xC04 JUMPI DUP2 DUP2 LT ISZERO PUSH2 0xBF6 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xBED SWAP1 PUSH2 0x1543 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xC03 DUP5 DUP5 DUP5 DUP5 SUB PUSH2 0x9B3 JUMP JUMPDEST JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xC7A JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xC71 SWAP1 PUSH2 0x15C3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xCEA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xCE1 SWAP1 PUSH2 0x14C3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xCF5 DUP4 DUP4 DUP4 PUSH2 0x1128 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP2 DUP2 LT ISZERO PUSH2 0xD7B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xD72 SWAP1 PUSH2 0x1563 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 DUP2 SUB PUSH1 0x0 DUP1 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xE0E SWAP2 SWAP1 PUSH2 0x1675 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0xE72 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0xE85 DUP5 DUP5 DUP5 PUSH2 0x112D JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ ISZERO PUSH2 0xEFB JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xEF2 SWAP1 PUSH2 0x15A3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0xF07 DUP3 PUSH1 0x0 DUP4 PUSH2 0x1128 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP2 DUP2 LT ISZERO PUSH2 0xF8D JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0xF84 SWAP1 PUSH2 0x14E3 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 DUP2 SUB PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0xFE4 SWAP2 SWAP1 PUSH2 0x16CB JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0x1049 SWAP2 SWAP1 PUSH2 0x1623 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0x105D DUP4 PUSH1 0x0 DUP5 PUSH2 0x112D JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x5 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SWAP1 POP DUP2 PUSH1 0x5 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8BE0079C531659141344CD1FD0A4F28419497F9722A3DAAFE3B4186F6B6457E0 PUSH1 0x40 MLOAD PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1141 DUP2 PUSH2 0x1B41 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1156 DUP2 PUSH2 0x1B58 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x116E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x117C DUP5 DUP3 DUP6 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1198 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x11A6 DUP6 DUP3 DUP7 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x11B7 DUP6 DUP3 DUP7 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0x11D6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x11E4 DUP7 DUP3 DUP8 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0x11F5 DUP7 DUP3 DUP8 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0x1206 DUP7 DUP3 DUP8 ADD PUSH2 0x1147 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0x1223 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x1231 DUP6 DUP3 DUP7 ADD PUSH2 0x1132 JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0x1242 DUP6 DUP3 DUP7 ADD PUSH2 0x1147 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x125E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH2 0x126C DUP5 DUP3 DUP6 ADD PUSH2 0x1147 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x127E DUP2 PUSH2 0x16FF JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x128D DUP2 PUSH2 0x1711 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x129E DUP3 PUSH2 0x1659 JUMP JUMPDEST PUSH2 0x12A8 DUP2 DUP6 PUSH2 0x1664 JUMP JUMPDEST SWAP4 POP PUSH2 0x12B8 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0x1754 JUMP JUMPDEST PUSH2 0x12C1 DUP2 PUSH2 0x1817 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12D9 PUSH1 0x23 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x12E4 DUP3 PUSH2 0x1828 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x12FC PUSH1 0x22 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x1307 DUP3 PUSH2 0x1877 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x131F PUSH1 0x26 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x132A DUP3 PUSH2 0x18C6 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1342 PUSH1 0x22 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x134D DUP3 PUSH2 0x1915 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1365 PUSH1 0x1D DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x1370 DUP3 PUSH2 0x1964 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1388 PUSH1 0x26 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x1393 DUP3 PUSH2 0x198D JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13AB PUSH1 0x20 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x13B6 DUP3 PUSH2 0x19DC JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13CE PUSH1 0x21 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x13D9 DUP3 PUSH2 0x1A05 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x13F1 PUSH1 0x25 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x13FC DUP3 PUSH2 0x1A54 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1414 PUSH1 0x24 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x141F DUP3 PUSH2 0x1AA3 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1437 PUSH1 0x25 DUP4 PUSH2 0x1664 JUMP JUMPDEST SWAP2 POP PUSH2 0x1442 DUP3 PUSH2 0x1AF2 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x1456 DUP2 PUSH2 0x173D JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x1465 DUP2 PUSH2 0x1747 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1480 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1275 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x149B PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x1284 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14BB DUP2 DUP5 PUSH2 0x1293 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14DC DUP2 PUSH2 0x12CC JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x14FC DUP2 PUSH2 0x12EF JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x151C DUP2 PUSH2 0x1312 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x153C DUP2 PUSH2 0x1335 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x155C DUP2 PUSH2 0x1358 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x157C DUP2 PUSH2 0x137B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x159C DUP2 PUSH2 0x139E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x15BC DUP2 PUSH2 0x13C1 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x15DC DUP2 PUSH2 0x13E4 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x15FC DUP2 PUSH2 0x1407 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x161C DUP2 PUSH2 0x142A JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1638 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x144D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x1653 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x145C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1680 DUP3 PUSH2 0x173D JUMP JUMPDEST SWAP2 POP PUSH2 0x168B DUP4 PUSH2 0x173D JUMP JUMPDEST SWAP3 POP DUP3 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF SUB DUP3 GT ISZERO PUSH2 0x16C0 JUMPI PUSH2 0x16BF PUSH2 0x17B9 JUMP JUMPDEST JUMPDEST DUP3 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x16D6 DUP3 PUSH2 0x173D JUMP JUMPDEST SWAP2 POP PUSH2 0x16E1 DUP4 PUSH2 0x173D JUMP JUMPDEST SWAP3 POP DUP3 DUP3 LT ISZERO PUSH2 0x16F4 JUMPI PUSH2 0x16F3 PUSH2 0x17B9 JUMP JUMPDEST JUMPDEST DUP3 DUP3 SUB SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x170A DUP3 PUSH2 0x171D JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x1772 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x1757 JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0x1781 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0x179F JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 EQ ISZERO PUSH2 0x17B3 JUMPI PUSH2 0x17B2 PUSH2 0x17E8 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6573730000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A206275726E20616D6F756E7420657863656564732062616C616E PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6365000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A206E6577206F776E657220697320746865207A65726F2061 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6464726573730000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7373000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20696E73756666696369656E7420616C6C6F77616E6365000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220616D6F756E7420657863656564732062 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x616C616E63650000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x4F776E61626C653A2063616C6C6572206973206E6F7420746865206F776E6572 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A206275726E2066726F6D20746865207A65726F20616464726573 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7300000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6472657373000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7265737300000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH32 0x45524332303A2064656372656173656420616C6C6F77616E63652062656C6F77 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x207A65726F000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x1B4A DUP2 PUSH2 0x16FF JUMP JUMPDEST DUP2 EQ PUSH2 0x1B55 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x1B61 DUP2 PUSH2 0x173D JUMP JUMPDEST DUP2 EQ PUSH2 0x1B6C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 AND 0xEE 0x22 SLOAD DUP6 0xF6 PUSH15 0x3894F3C3732BDEF1A2F96CEA2099F SUB 0xEC SWAP1 GAS 0xAF 0xC3 CALLDATASIZE 0xA7 0x25 0xE3 PUSH5 0x736F6C6343 STOP ADDMOD DIV STOP CALLER ",
    sourceMap: "248:319:6:-:0;;;308:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;401:5;408:7;2052:5:1;2044;:13;;;;;;;;;;;;:::i;:::-;;2077:7;2067;:17;;;;;;;;;;;;:::i;:::-;;1978:113;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;425:33:6::1;431:10;443:14;425:5;;;:33;;:::i;:::-;308:156:::0;;;248:319;;640:96:5;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;8415:389:1:-;8517:1;8498:21;;:7;:21;;;;8490:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8566:49;8595:1;8599:7;8608:6;8566:20;;;:49;;:::i;:::-;8642:6;8626:12;;:22;;;;;;;:::i;:::-;;;;;;;;8680:6;8658:9;:18;8668:7;8658:18;;;;;;;;;;;;;;;;:28;;;;;;;:::i;:::-;;;;;;;;8722:7;8701:37;;8718:1;8701:37;;;8731:6;8701:37;;;;;;:::i;:::-;;;;;;;;8749:48;8777:1;8781:7;8790:6;8749:19;;;:48;;:::i;:::-;8415:389;;:::o;11795:121::-;;;;:::o;12504:120::-;;;;:::o;248:319:6:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:354:7:-;96:5;121:66;137:49;179:6;137:49;:::i;:::-;121:66;:::i;:::-;112:75;;210:6;203:5;196:21;248:4;241:5;237:16;286:3;277:6;272:3;268:16;265:25;262:2;;;303:1;300;293:12;262:2;316:39;348:6;343:3;338;316:39;:::i;:::-;102:259;;;;;;:::o;381:288::-;448:5;497:3;490:4;482:6;478:17;474:27;464:2;;515:1;512;505:12;464:2;548:6;542:13;573:90;659:3;651:6;644:4;636:6;632:17;573:90;:::i;:::-;564:99;;454:215;;;;;:::o;675:143::-;732:5;763:6;757:13;748:22;;779:33;806:5;779:33;:::i;:::-;738:80;;;;:::o;824:808::-;932:6;940;948;997:2;985:9;976:7;972:23;968:32;965:2;;;1013:1;1010;1003:12;965:2;1077:1;1066:9;1062:17;1056:24;1107:18;1099:6;1096:30;1093:2;;;1139:1;1136;1129:12;1093:2;1167:74;1233:7;1224:6;1213:9;1209:22;1167:74;:::i;:::-;1157:84;;1027:224;1311:2;1300:9;1296:18;1290:25;1342:18;1334:6;1331:30;1328:2;;;1374:1;1371;1364:12;1328:2;1402:74;1468:7;1459:6;1448:9;1444:22;1402:74;:::i;:::-;1392:84;;1261:225;1525:2;1551:64;1607:7;1598:6;1587:9;1583:22;1551:64;:::i;:::-;1541:74;;1496:129;955:677;;;;;:::o;1638:366::-;1780:3;1801:67;1865:2;1860:3;1801:67;:::i;:::-;1794:74;;1877:93;1966:3;1877:93;:::i;:::-;1995:2;1990:3;1986:12;1979:19;;1784:220;;;:::o;2010:118::-;2097:24;2115:5;2097:24;:::i;:::-;2092:3;2085:37;2075:53;;:::o;2134:419::-;2300:4;2338:2;2327:9;2323:18;2315:26;;2387:9;2381:4;2377:20;2373:1;2362:9;2358:17;2351:47;2415:131;2541:4;2415:131;:::i;:::-;2407:139;;2305:248;;;:::o;2559:222::-;2652:4;2690:2;2679:9;2675:18;2667:26;;2703:71;2771:1;2760:9;2756:17;2747:6;2703:71;:::i;:::-;2657:124;;;;:::o;2787:129::-;2821:6;2848:20;;:::i;:::-;2838:30;;2877:33;2905:4;2897:6;2877:33;:::i;:::-;2828:88;;;:::o;2922:75::-;2955:6;2988:2;2982:9;2972:19;;2962:35;:::o;3003:308::-;3065:4;3155:18;3147:6;3144:30;3141:2;;;3177:18;;:::i;:::-;3141:2;3215:29;3237:6;3215:29;:::i;:::-;3207:37;;3299:4;3293;3289:15;3281:23;;3070:241;;;:::o;3317:169::-;3401:11;3435:6;3430:3;3423:19;3475:4;3470:3;3466:14;3451:29;;3413:73;;;;:::o;3492:305::-;3532:3;3551:20;3569:1;3551:20;:::i;:::-;3546:25;;3585:20;3603:1;3585:20;:::i;:::-;3580:25;;3739:1;3671:66;3667:74;3664:1;3661:81;3658:2;;;3745:18;;:::i;:::-;3658:2;3789:1;3786;3782:9;3775:16;;3536:261;;;;:::o;3803:77::-;3840:7;3869:5;3858:16;;3848:32;;;:::o;3886:307::-;3954:1;3964:113;3978:6;3975:1;3972:13;3964:113;;;4063:1;4058:3;4054:11;4048:18;4044:1;4039:3;4035:11;4028:39;4000:2;3997:1;3993:10;3988:15;;3964:113;;;4095:6;4092:1;4089:13;4086:2;;;4175:1;4166:6;4161:3;4157:16;4150:27;4086:2;3935:258;;;;:::o;4199:320::-;4243:6;4280:1;4274:4;4270:12;4260:22;;4327:1;4321:4;4317:12;4348:18;4338:2;;4404:4;4396:6;4392:17;4382:27;;4338:2;4466;4458:6;4455:14;4435:18;4432:38;4429:2;;;4485:18;;:::i;:::-;4429:2;4250:269;;;;:::o;4525:281::-;4608:27;4630:4;4608:27;:::i;:::-;4600:6;4596:40;4738:6;4726:10;4723:22;4702:18;4690:10;4687:34;4684:62;4681:2;;;4749:18;;:::i;:::-;4681:2;4789:10;4785:2;4778:22;4568:238;;;:::o;4812:180::-;4860:77;4857:1;4850:88;4957:4;4954:1;4947:15;4981:4;4978:1;4971:15;4998:180;5046:77;5043:1;5036:88;5143:4;5140:1;5133:15;5167:4;5164:1;5157:15;5184:180;5232:77;5229:1;5222:88;5329:4;5326:1;5319:15;5353:4;5350:1;5343:15;5370:102;5411:6;5462:2;5458:7;5453:2;5446:5;5442:14;5438:28;5428:38;;5418:54;;;:::o;5478:181::-;5618:33;5614:1;5606:6;5602:14;5595:57;5584:75;:::o;5665:122::-;5738:24;5756:5;5738:24;:::i;:::-;5731:5;5728:35;5718:2;;5777:1;5774;5767:12;5718:2;5708:79;:::o;248:319:6:-;;;;;;;"
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
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
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
}

export const contractsReef20WithBurn = {
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
  "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol": "// SPDX-License-Identifier: MIT\n" +
    "// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC20/extensions/ERC20Burnable.sol)\n" +
    "\n" +
    "pragma solidity ^0.8.0;\n" +
    "\n" +
    "import \"../ERC20.sol\";\n" +
    "import \"../../../utils/Context.sol\";\n" +
    "\n" +
    "/**\n" +
    " * @dev Extension of {ERC20} that allows token holders to destroy both their own\n" +
    " * tokens and those that they have an allowance for, in a way that can be\n" +
    " * recognized off-chain (via event analysis).\n" +
    " */\n" +
    "abstract contract ERC20Burnable is Context, ERC20 {\n" +
    "    /**\n" +
    "     * @dev Destroys `amount` tokens from the caller.\n" +
    "     *\n" +
    "     * See {ERC20-_burn}.\n" +
    "     */\n" +
    "    function burn(uint256 amount) public virtual {\n" +
    "        _burn(_msgSender(), amount);\n" +
    "    }\n" +
    "\n" +
    "    /**\n" +
    "     * @dev Destroys `amount` tokens from `account`, deducting from the caller's\n" +
    "     * allowance.\n" +
    "     *\n" +
    "     * See {ERC20-_burn} and {ERC20-allowance}.\n" +
    "     *\n" +
    "     * Requirements:\n" +
    "     *\n" +
    "     * - the caller must have allowance for ``accounts``'s tokens of at least\n" +
    "     * `amount`.\n" +
    "     */\n" +
    "    function burnFrom(address account, uint256 amount) public virtual {\n" +
    "        _spendAllowance(account, _msgSender(), amount);\n" +
    "        _burn(account, amount);\n" +
    "    }\n" +
    "}\n",
  '@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol': '// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../IERC20.sol";\n\n/**\n * @dev Interface for the optional metadata functions from the ERC20 standard.\n *\n * _Available since v4.1._\n */\ninterface IERC20Metadata is IERC20 {\n    /**\n     * @dev Returns the name of the token.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the symbol of the token.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the decimals places of the token.\n     */\n    function decimals() external view returns (uint8);\n}\n',
  '@openzeppelin/contracts/utils/Context.sol': '// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n',
  "contracts/ReefBurnable.sol": '//SPDX-License-Identifier: MIT\n' +
    'pragma solidity ^0.8.0;\n' +
    '\n' +
    'import "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n' +
    'import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";\n' +
    'import "@openzeppelin/contracts/access/Ownable.sol";\n' +
    '\n' +
    'contract ReefBurnable is ERC20, ERC20Burnable, Ownable {\n' +
    '  constructor(string memory _name, string memory _symbol, uint256 initialBalance) public ERC20(_name, _symbol) {\n' +
    '     _mint(msg.sender, initialBalance);\n' +
    '  }\n' +
    '  \n' +
    '  function burn(uint amount) public override onlyOwner {\n' +
    '     _burn(msg.sender, amount);\n' +
    '  }\n' +
    '}'
}

export const metadataArtifactReef20WithBurn = {
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
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
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
      }
    ]
  },
  settings: {
    compilationTarget: {
      'contracts/ReefBurnable.sol': 'ReefBurnable',
    },
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  version: 1,
}
