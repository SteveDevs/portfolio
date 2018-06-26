import { TestBed, inject } from '@angular/core/testing';

import { GlobalPortfolioStatsService } from './global-portfolio-stats.service';

describe('GlobalPortfolioStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPortfolioStatsService]
    });
  });

  it('should be created', inject([GlobalPortfolioStatsService], (service: GlobalPortfolioStatsService) => {
    expect(service).toBeTruthy();
  }));
});
