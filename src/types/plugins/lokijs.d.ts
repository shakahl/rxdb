import type { LeaderElector } from 'broadcast-channel';
import type {
    Collection
} from 'lokijs';
import { AddReturn } from 'unload';
import { LokiSaveQueue } from '../../plugins/lokijs/loki-save-queue';
import type { RxStorageChangedDocumentMeta } from '../rx-storage';

export type LokiDatabaseSettings = Partial<LokiConstructorOptions & LokiConfigOptions> & {};

export type LokiCollectionSettings = Partial<CollectionOptions<any>>;

export type LokiSettings = {
    database?: LokiDatabaseSettings;
    collection?: LokiCollectionSettings;
};

export type LokiStorageInternals = {
    leaderElector?: LeaderElector;
    localState?: Promise<LokiLocalDatabaseState>;
};

export type LokiRemoteRequestBroadcastMessage = {
    response: false;
    type: string;
    databaseName: string;
    collectionName: string;
    operation: string;
    params: any[];
    requestId: string;
};

export type LokiRemoteResponseBroadcastMessage = {
    response: true;
    type: string,
    databaseName: string;
    collectionName: string;
    requestId: string;
    result: any | any[];
    // if true, the result property will contain an error state
    isError: boolean;
};

export type LokiDatabaseState = {
    database: Loki;
    databaseSettings: LokiDatabaseSettings;
    saveQueue: LokiSaveQueue,

    // all known collections of the database
    collections: {
        [collectionName: string]: Collection;
    };

    /**
     * Registered unload handlers
     * so we can remove them on close.
     */
    unloads: AddReturn[];
};

export type LokiLocalDatabaseState = {
    databaseState: LokiDatabaseState;
    collection: Collection<any & { $lastWriteAt: number; }>;
    /**
     * LokiJS has no persistend, observable
     * or queryable changefeed. So we keep our own changefeed
     * in the changesCollection.
     */
    changesCollection: Collection<RxStorageChangedDocumentMeta>;
}
