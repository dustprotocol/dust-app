import {
  contractsReef20WithBurn,
  metadataArtifactReef20WithBurn,
  metadataReef20WithBurn
} from './reef20DeployDataWithBurn';
import { contractsReef20Deploy, metadataArtifactReef20Deploy } from './reef20DeployTokenData';
import { ReefContract } from '../../utils/contract';
import {
  contractsReef20WithMintAndBurn,
  metadataArtifactReef20WithMintAndBurn
} from './reef20DeployDataWithMintAndBurn';
import { contractsReef20DeployWithMint, metadataArtifactReef20DeployWithMint } from './reef20DeployDataWithMint';

export const getTokenVerifyArgs = ({ mintable, burnable} : { mintable: boolean, burnable: boolean }): ReefContract => {
  if (mintable && burnable) {
    console.log('Creating token with mint and burn...')
    const { compilationTarget } = metadataArtifactReef20WithMintAndBurn.settings;
    const compTargetFileName = Object.keys(compilationTarget)[0];
    return {
      source: JSON.stringify(contractsReef20WithMintAndBurn),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      contractName: compilationTarget[compTargetFileName],
      target: metadataArtifactReef20WithMintAndBurn.settings.evmVersion,
      compilerVersion: `v${metadataArtifactReef20WithMintAndBurn.compiler.version}`,
      optimization: metadataArtifactReef20WithMintAndBurn.settings.optimizer.enabled.toString(),
      filename: compTargetFileName,
      runs: metadataArtifactReef20WithMintAndBurn.settings.optimizer.runs,
    }
  }
  if (!mintable && burnable) {
    console.log('Creating token with burn...')
    const { compilationTarget } = metadataArtifactReef20WithBurn.settings;
    const compTargetFileName = Object.keys(compilationTarget)[0];
    return {
      source: JSON.stringify(contractsReef20WithBurn),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      contractName: compilationTarget[compTargetFileName],
      target: metadataArtifactReef20WithBurn.settings.evmVersion,
      compilerVersion: `v${metadataArtifactReef20WithBurn.compiler.version}`,
      optimization: metadataArtifactReef20WithBurn.settings.optimizer.enabled.toString(),
      filename: compTargetFileName,
      runs: metadataArtifactReef20WithBurn.settings.optimizer.runs,
    }
  }
  if (mintable && !burnable) {
    console.log('Creating token with mint...')
    const { compilationTarget } = metadataArtifactReef20DeployWithMint.settings;
    const compTargetFileName = Object.keys(compilationTarget)[0];
    return {
      source: JSON.stringify(contractsReef20DeployWithMint),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      contractName: compilationTarget[compTargetFileName],
      target: metadataArtifactReef20DeployWithMint.settings.evmVersion,
      compilerVersion: `v${metadataArtifactReef20DeployWithMint.compiler.version}`,
      optimization: metadataArtifactReef20DeployWithMint.settings.optimizer.enabled.toString(),
      filename: compTargetFileName,
      runs: metadataArtifactReef20DeployWithMint.settings.optimizer.runs,
    }
  }
  if (!mintable && !burnable) {
    console.log('Creating basic token...')
    const { compilationTarget } = metadataArtifactReef20Deploy.settings;
    const compTargetFileName = Object.keys(compilationTarget)[0];
    return {
      source: JSON.stringify(contractsReef20Deploy),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      contractName: compilationTarget[compTargetFileName],
      target: metadataArtifactReef20Deploy.settings.evmVersion,
      compilerVersion: `v${metadataArtifactReef20Deploy.compiler.version}`,
      optimization: metadataArtifactReef20Deploy.settings.optimizer.enabled.toString(),
      filename: compTargetFileName,
      runs: metadataArtifactReef20Deploy.settings.optimizer.runs,
    }
  } else {
    const { compilationTarget } = metadataArtifactReef20Deploy.settings;
    const compTargetFileName = Object.keys(compilationTarget)[0];
    return {
      source: JSON.stringify(contractsReef20Deploy),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      contractName: compilationTarget[compTargetFileName],
      target: metadataArtifactReef20Deploy.settings.evmVersion,
      compilerVersion: `v${metadataArtifactReef20Deploy.compiler.version}`,
      optimization: metadataArtifactReef20Deploy.settings.optimizer.enabled.toString(),
      filename: compTargetFileName,
      runs: metadataArtifactReef20Deploy.settings.optimizer.runs,
    }
  }
}
