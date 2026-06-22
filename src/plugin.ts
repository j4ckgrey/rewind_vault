/**
 * The Vault — runtime plugin entry.
 *
 * Bundled by `npm run build` into dist/index.mjs and installed by the operator
 * into data/addons/vault/index.mjs. The server imports it and calls
 * `register(host)` once, handing over its DB / ffprobe / web-search / logger as
 * the VaultHost. `register` returns the namespaces the server's adult handlers
 * call. (The Vault also bundles The Forge's resolver/parser via the @forge alias,
 * since it resolves adult streams through the debrid resolvers.)
 */
import { setVaultHost, type VaultHost } from "@vault/host";
import * as catalog from "@vault/catalog";
import * as search from "@vault/search";
import * as apijav from "@vault/apijav";
import * as rapidgator from "@vault/rapidgator";
import * as playback from "@vault/playback";

export const manifest = { id: "rewind.vault", kind: "adult" as const };

export function register(host: VaultHost) {
  setVaultHost(host);
  return { catalog, search, apijav, rapidgator, playback };
}
