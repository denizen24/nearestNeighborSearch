import { Injectable } from '@nestjs/common';
const kdt = require('kdt');

@Injectable()
export class CoordinatesService {

    public async nearestNeighborSearch(userCoordinates, coords) {
        try {
            const distance = (a, b) => {
                return Math.pow(a.latitude - b.latitude, 2) + Math.pow(a.longitude - b.longitude, 2);
            };

            const tree = kdt.createKdTree(coords, distance, ['latitude', 'longitude']);

            const nearest = tree.nearest(userCoordinates, 1);
            // log(nearest.reverse());
            return nearest.reverse();
        } catch (error) {
            throw Error('Error Nearest Neighbor Search');
        }
    }

}
