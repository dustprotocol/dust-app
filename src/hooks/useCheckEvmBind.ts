import { ReefSigner } from '@reef-defi/react-lib';
import { useEffect } from 'react';

export const useCheckEvmBind = (signer: ReefSigner, setIsBound: (isBound: boolean) => void) => {
  useEffect(() => {
    if (!signer) {
      return;
    }
    setIsBound(signer.isEvmClaimed);
  }, [signer])
}
